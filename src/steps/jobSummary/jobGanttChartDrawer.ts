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

import { githubContext } from '@/constants/github.js'
import WorkflowJob from '@/utils/jobs/workflowJob.js'
import GanttChart from '@/utils/mermaid/gantt/ganttChart.js'
import GanttTaskTag from '@/utils/mermaid/gantt/ganttTaskTag.js'
import JobUrl from '@/utils/urls/jobUrl.js'
import { PullRequestCommitUrl } from '@/utils/urls/pullRequestCommitUrl.js'
import { Context } from '@actions/github/lib/context.js'

export default class JobGanttChartDrawer {
  readonly #jobs: Readonly<WorkflowJob[]>
  readonly #githubContext: Context

  constructor(
    args: Readonly<{
      jobs: Readonly<WorkflowJob[]>
      githubContext: Readonly<Context>
    }>
  ) {
    const { jobs, githubContext } = args

    if (!jobs || jobs.length <= 0) {
      throw new Error(
        'To draw Gantt by using JobGanttChartDrawer, At least one job need to be provided.'
      )
    }

    this.#jobs = jobs
    this.#githubContext = githubContext
  }

  public async generateGanttChartParagraph(): Promise<string> {
    const filteredJobs = this.#filterJobWithValidStep()
    const title = this.#generateTitle()

    const ganttChart = new GanttChart({ title })

    this.#populateGanttChartWithJobs({
      ganttChart,
      jobs: filteredJobs
    })

    const markdown = ganttChart.toMermaidSyntax()

    const summarySyntax = this.#generateSummaryText()

    return summarySyntax + markdown
  }

  /**
   * Info: (20250117 - Murky)
   * Return jobs that all steps in jobs has startAt and completedAt
   */
  #filterJobWithValidStep(): WorkflowJob[] {
    const filteredJobs = this.#jobs.map((job) =>
      job.filterStepWithBothStartAtAndCompleteAt()
    )

    return filteredJobs
  }

  #generateTitle() {
    const { repo, runId, actor } = this.#githubContext

    const title = `Repo: ${repo.repo} - RunId: ${runId} - Actor: ${actor}`
    return title
  }

  /**
   * Filled GanttChart By jobs as section and steps as task
   */
  #populateGanttChartWithJobs(
    args: Readonly<{
      ganttChart: GanttChart
      jobs: WorkflowJob[]
    }>
  ) {
    const { ganttChart, jobs } = args

    for (const job of jobs) {
      ganttChart.addSection({ name: job.name })

      for (const step of job.steps) {
        const ganttTaskTag = new GanttTaskTag(step.ganttTag)

        if (!step.startedAt || !step.completedAt) {
          throw new Error(
            'All step pass to ganttChart must have startedAt and completeAt'
          )
        }

        ganttChart.addTaskToLastSection({
          name: step.name,
          startedAt: step.startedAt,
          completedAt: step.completedAt,
          tags: [ganttTaskTag]
        })
      }
    }
  }

  #generateSummaryText() {
    const title = this.#generateHeader()
    const commitMessage = this.#generateCommitMessage()
    const jobDetails = this.#generateJobDetails()

    return title + commitMessage + jobDetails
  }

  #generateHeader(): string {
    return '# ActionRelay - Jobs and Steps Gantt Chart\n'
  }

  #generateCommitMessage(): string {
    const pullRequestCommitUrl: PullRequestCommitUrl =
      PullRequestCommitUrl.fromContext(this.#githubContext)

    return `Base on commit: [${pullRequestCommitUrl.commitId}](${pullRequestCommitUrl.url})\n\n`
  }

  #generateJobDetails(): string {
    const { owner, repo } = githubContext.repo
    const jobUrls = this.#jobs.map((job) => ({
      jobUrl: JobUrl.fromString({ jobId: job.id, owner, repo }),
      jobName: job.name
    }))

    const jobSummary = 'Jobs details below:\n'
    const jobMessages = jobUrls
      .map(
        (jobUrl) =>
          `- Job **${jobUrl.jobName}** details [here](${jobUrl.jobUrl.url})\n`
      )
      .join('')

    return jobSummary + jobMessages
  }
}
