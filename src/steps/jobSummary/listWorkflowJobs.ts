import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'
import { WorkflowJob } from '@/steps/jobSummary/workflowJob.js'

/**
 * Info: (20250113 - Murky)
 *
 * This class fetch jobs data from [Octokit List jobs for a workflow run](https://octokit.github.io/rest.js/v21/#List-jobs-for-a-workflow-run).
 * Which will Return type of [Github api](https://docs.github.com/en/rest/actions/workflow-jobs?apiVersion=2022-11-28#list-jobs-for-a-workflow-run).
 * Then we export text that can be used in [mermaid-cli](https://github.com/mermaid-js/mermaid-cli),
 * mermaid-cli guild please check [Gantt diagrams](https://mermaid.js.org/syntax/gantt.html)
 */
export default class ListWorkflowJobs {
  /**
   * Info: (20250113 - Murky)
   * Maximum jobs GITHUB allow to fetch per page
   */
  static readonly #MAX_PAGE_SIZE = 100

  /**
   * Info: (20250114 - Murky)
   * github toolkit to fetch api
   */
  readonly #octokit: GitHubInstance

  readonly #githubContext: Context

  constructor(
    options: Readonly<{
      octokit: GitHubInstance
      githubContext: Context
    }>
  ) {
    const { octokit, githubContext } = options

    this.#octokit = octokit
    this.#githubContext = githubContext
  }

  public async fetchFromGithub() {
    const { repo, runId } = this.#githubContext

    const page = 0

    const workflowJobs: WorkflowJob[] = []

    while (true) {
      const result = await this.#octokit.rest.actions.listJobsForWorkflowRun({
        owner: repo.owner,
        repo: repo.repo,
        run_id: runId,
        page,
        per_page: ListWorkflowJobs.#MAX_PAGE_SIZE
      })

      const jobs = result.data.jobs

      if (!jobs || jobs.length <= 0) {
        break
      }

      for (const job of jobs) {
        const workflowJob: WorkflowJob = new WorkflowJob(job)
        workflowJobs.push(workflowJob)
      }

      /**
       * Info: (20250114 - Murky)
       * If jobs length less than max page, we are in last page, no need to fetch again
       */
      if (jobs.length <= ListWorkflowJobs.#MAX_PAGE_SIZE) {
        break
      }
    }

    return workflowJobs
  }
}
