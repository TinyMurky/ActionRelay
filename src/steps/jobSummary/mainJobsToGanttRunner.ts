import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'

import Logger from '@/utils/logger.js'

import ListWorkflowJobs from '@/steps/jobSummary/listWorkflowJobs.js'
import WorkflowJob from '@/steps/jobSummary/workflowJob.js'
import JobGanttChartDrawer from '@/steps/jobSummary/jobGanttChartDrawer.js'

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

  async #fetchWorkflowJobs(): Promise<WorkflowJob[]> {
    const listWorkflowJobs = new ListWorkflowJobs({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    const workflowJobs = await listWorkflowJobs.fetchFromGithub()

    Logger.debug(
      `WorkflowJobs fetch successfully, job length: ${workflowJobs.length}`
    )
    return workflowJobs
  }

  async #drawGanttChart(jobs: Readonly<WorkflowJob[]>): Promise<void> {
    const jobGanttChartDrawer = new JobGanttChartDrawer({
      jobs,
      githubContext: this.#githubContext
    })

    await jobGanttChartDrawer.drawAndSafeGanttChart()
    Logger.debug('Gantt Chart create successfully')
  }

  public async run() {
    const workflowJobs = await this.#fetchWorkflowJobs()
    await this.#drawGanttChart(workflowJobs)
    Logger.info('[Step]: Gantt Chart Generate completed')
  }
}
