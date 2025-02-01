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
import WorkflowJob from '@/utils/jobs/workflowJob.js'
import Logger from '@/utils/logger.js'
import * as core from '@actions/core'

export default class JobPendingList {
  readonly jobs: WorkflowJob[]

  constructor(
    args: Readonly<{
      jobs: WorkflowJob[]
      coreInput: CoreInput
    }>
  ) {
    const { jobs, coreInput } = args

    const filteredJobs = jobs.filter(
      (job) => !job.name.includes(coreInput.nameOfThisJob)
    )

    // not filter out current job
    if (filteredJobs.length === jobs.length) {
      const errorMessage =
        'NAME_OF_THIS_JOB must match exactly to the name of the job that runs Action Relay. The Job Name you set is not found in the GitHub API response.'
      Logger.error(errorMessage)
      core.setFailed(errorMessage)
      throw new Error(errorMessage)
    }

    if (filteredJobs.length <= 0) {
      const errorMessage =
        'JobWaitingList need to be initialized at least 1 job, Action Relay Job not included'
      Logger.error(errorMessage)
      throw new Error(errorMessage)
    }

    this.jobs = filteredJobs
  }

  /**
   * Return string of not completed job separate bt comma
   */
  public get pendingJobs(): string {
    const pendingJobs = this.jobs.filter((job) => !job.isCompleted())
    const pendingJobsName = pendingJobs.map((job) => job.name).join(', ')
    return pendingJobsName
  }

  public isAllJobsSuccess(): boolean {
    return this.jobs.every((job) => job.isSuccess())
  }

  public isAllJobsCompleted(): boolean {
    return this.jobs.every((job) => job.isCompleted())
  }
}
