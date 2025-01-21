/**
 * Source: [catchpoint/workflow-telemetry-action](https://github.com/catchpoint/workflow-telemetry-action/tree/master)
 * Copyright (c) 2025 Catchpoint Systems 

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

import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'

import Logger from '@/utils/logger.js'

import ListWorkflowJobs from '@/steps/jobSummary/listWorkflowJobs.js'
import WorkflowJob from '@/utils/jobs/workflowJob.js'
import JobGanttChartDrawer from '@/steps/jobSummary/jobGanttChartDrawer.js'
import GithubCommitter from '@/utils/github/githubCommitter.js'

/**
 * This class is designed to run the main process of generating Gantt charts
 * from GitHub jobs.
 * It is intended to be used exclusively in the main function.
 */
export default class MainJobsToGanttRunner {
  readonly #octokit: GitHubInstance
  readonly #githubContext: Context

  constructor(args: { octokit: GitHubInstance; githubContext: Context }) {
    this.#octokit = args.octokit
    this.#githubContext = args.githubContext
  }

  #isPullRequest() {
    return !!this.#githubContext.payload.pull_request
  }

  async #fetchWorkflowJobs(): Promise<WorkflowJob[]> {
    const listWorkflowJobs = new ListWorkflowJobs({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    const workflowJobs = await listWorkflowJobs.fetchFromGithub()

    Logger.debug(
      `WorkflowJobs fetch successfully, job length: ${workflowJobs.length}`
    )
    Logger.debug(`WorkflowJobs: ${JSON.stringify(workflowJobs, null, 2)}`)
    return workflowJobs
  }

  async #generateGanttChartParagraph(
    jobs: Readonly<WorkflowJob[]>
  ): Promise<string> {
    const jobGanttChartDrawer = new JobGanttChartDrawer({
      jobs,
      githubContext: this.#githubContext
    })

    const ganttChartParagraph =
      await jobGanttChartDrawer.generateGanttChartParagraph()

    Logger.debug('Gantt Chart create successfully')

    return ganttChartParagraph
  }

  async #createCommit(args: Readonly<{ ganttChartParagraph: string }>) {
    const { ganttChartParagraph } = args
    const githubCommitter = new GithubCommitter({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    return githubCommitter.createComment({
      body: ganttChartParagraph,
      postToPullRequest: true
    })
  }

  public async run() {
    if (this.#isPullRequest()) {
      const workflowJobs = await this.#fetchWorkflowJobs()
      const ganttChartParagraph: string =
        await this.#generateGanttChartParagraph(workflowJobs)

      await this.#createCommit({
        ganttChartParagraph
      })
      Logger.info('[Step]: Gantt Chart Generate completed')
    } else {
      Logger.info(
        '[Step]: Gantt Chart Generate skipped since the commit is not pull request'
      )
    }
  }
}
