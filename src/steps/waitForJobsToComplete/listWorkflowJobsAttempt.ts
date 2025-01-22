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

import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'
import WorkflowJob from '@/utils/jobs/workflowJob.js'
import Logger from '@/utils/logger.js'
import { EnvConfig } from '@/utils/envConfig.js'

/**
 * Info: (20250113 - Murky)
 *
 * This class fetch jobs data from [Octokit List jobs for a workflow run](https://octokit.github.io/rest.js/v21/#List-jobs-for-a-workflow-run).
 * Which will Return type of [Github api](https://docs.github.com/en/rest/actions/workflow-jobs?apiVersion=2022-11-28#list-jobs-for-a-workflow-run).
 * Then we export text that can be used in [mermaid-cli](https://github.com/mermaid-js/mermaid-cli),
 * mermaid-cli guild please check [Gantt diagrams](https://mermaid.js.org/syntax/gantt.html)
 */
export default class ListWorkflowJobsAttempt {
  /**
   * github toolkit to fetch api
   */
  readonly #octokit: GitHubInstance

  readonly #githubContext: Context

  readonly #envConfig: EnvConfig

  constructor(
    options: Readonly<{
      octokit: GitHubInstance
      githubContext: Context
      envConfig: EnvConfig
    }>
  ) {
    const { octokit, githubContext, envConfig } = options

    this.#octokit = octokit
    this.#githubContext = githubContext
    this.#envConfig = envConfig
  }

  public async fetchFromGithub(): Promise<WorkflowJob[]> {
    const attempt_number = this.#envConfig.GITHUB_RUN_ATTEMPT

    const {
      runId: run_id,
      repo: { owner, repo }
    } = this.#githubContext

    Logger.debug(
      `fetching jobs for /repos/${owner}/${repo}/actions/runs/${run_id}/attempts/${attempt_number}/jobs`
    )

    const jobs = await this.#octokit.paginate(
      this.#octokit.rest.actions.listJobsForWorkflowRunAttempt,
      {
        attempt_number,
        owner,
        repo,
        run_id
      }
    )

    const workflowJobs: WorkflowJob[] = jobs.map((job) =>
      WorkflowJob.fromGithub(job)
    )

    return workflowJobs
  }
}
