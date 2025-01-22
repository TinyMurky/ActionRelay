/**
 * Source: [yogeshlonkar/wait-for-jobs](https://github.com/yogeshlonkar/wait-for-jobs/tree/main)
 * Copyright (c) 2025 yogeshlonkar

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import CoreInput from '@/utils/coreInput.js'
import Logger from '@/utils/logger.js'
import { endGroup, setFailed, startGroup } from '@actions/core'
import { setTimeout } from 'timers/promises'

import ListWorkflowJobsAttempt from '@/steps/waitForJobsToComplete/listWorkflowJobsAttempt.js'
import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'
import { EnvConfig } from '@/utils/envConfig.js'
import JobPendingList from '@/steps/waitForJobsToComplete/jobPendingList.js'

export default class WaitForJobsToComplete {
  /**
   * Time out waiting progress after timeoutAfterMinute,
   * maximum is 15 minute
   */
  readonly #timeoutAfterMinute: number

  /**
   * How long of waiting to check if job complete in millisecond
   */
  readonly #intervalToCheckJobs: number

  readonly #taskCtrl = new AbortController()

  readonly #timeoutCtrl = new AbortController()

  readonly #octokit: GitHubInstance

  readonly #githubContext: Context

  readonly #envConfig: EnvConfig

  readonly #coreInput: CoreInput

  constructor(
    args: Readonly<{
      coreInput: CoreInput
      octokit: GitHubInstance
      githubContext: Context
      envConfig: EnvConfig
    }>
  ) {
    const { coreInput, octokit, githubContext, envConfig } = args

    this.#coreInput = coreInput
    this.#timeoutAfterMinute = coreInput.timeoutAfterMinute
    this.#intervalToCheckJobs = coreInput.intervalToCheckJobs
    this.#octokit = octokit
    this.#githubContext = githubContext
    this.#envConfig = envConfig
  }

  /**
   * Sleep for given milliseconds
   *
   * @param time in milliseconds to sleep for
   * @param controller to abort timeout
   * @param label for the sleep
   */
  async #sleep(time: number, controller: AbortController, label?: string) {
    await setTimeout(time, undefined, { signal: controller.signal })
    if (label) {
      Logger.debug(`${label} done`)
    }
  }

  /**
   * Timeout execution after {@link this.#timeoutAfterMinute}
   */
  async #timeout() {
    await this.#sleep(
      this.#timeoutAfterMinute * 60 * 1000,
      this.#timeoutCtrl,
      'action-timeout'
    )
    throw new Error(
      `error: jobs did not complete in ${this.#timeoutAfterMinute} minutes`
    )
  }

  /**
   * clean up setTimeout after resolve of {@link Promise.race}
   */
  #cleanup = () => {
    this.#taskCtrl.abort()
    this.#timeoutCtrl.abort()
    endGroup()
  }

  /**
   * handle rejection from {@link Promise.race}
   *
   * @param reason The rejection reason
   */
  #onRejected = (reason: unknown) => {
    this.#cleanup()
    if (reason instanceof Error) {
      setFailed(reason.message)
    } else {
      setFailed(`${reason}`)
    }
  }

  async #wait() {
    startGroup(
      `Starting Loop to check if Job is Completed, but not checking if job is success`
    )

    let fetchAttemptTime = 0

    while (true) {
      fetchAttemptTime += 1
      Logger.debug(`The ${fetchAttemptTime} time checking if job complete`)
      const listJobsForWorkflowRunAttempt = new ListWorkflowJobsAttempt({
        octokit: this.#octokit,
        githubContext: this.#githubContext,
        envConfig: this.#envConfig
      })

      const jobs = await listJobsForWorkflowRunAttempt.fetchFromGithub()

      const jobPendingList = new JobPendingList({
        jobs,
        coreInput: this.#coreInput
      })

      if (jobPendingList.isAllJobsCompleted()) {
        break
      }

      Logger.info(`waiting for jobs ${jobPendingList.pendingJobs}`)
      await this.#sleep(
        this.#intervalToCheckJobs,
        this.#taskCtrl,
        'wait-for-jobs'
      )
    }

    endGroup()
  }

  public async start(): Promise<void> {
    await Promise.race([this.#timeout(), this.#wait()]).then(
      this.#cleanup,
      this.#onRejected
    )

    Logger.info('All Previous Jobs are completed!')
  }
}
