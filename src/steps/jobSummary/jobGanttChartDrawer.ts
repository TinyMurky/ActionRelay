import { WorkflowJob } from '@/steps/jobSummary/workflowJob.js'
import FileSystem from '@/utils/fileSystem.js'
import GanttChart from '@/utils/mermaid/gantt/ganttChart.js'
import GanttTaskTag from '@/utils/mermaid/gantt/ganttTaskTag.js'
import MermaidExporter from '@/utils/mermaid/mermaidExporter.js'
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

  /**
   * Mermaid Cli need to write syntax to local mmd file first,
   * please make sure output folder exist by FileSystem.initOutputFolder()
   */
  #writeMermaidMMDFile(
    args: Readonly<{
      ganttChart: GanttChart
      title: string
    }>
  ): string {
    const { ganttChart, title } = args

    const ganttMermaidSyntax = ganttChart.toMermaidSyntax()

    const ganttMMDFilePath = FileSystem.writeToOutputFolder(
      `${title}.mmd`,
      ganttMermaidSyntax
    )

    return ganttMMDFilePath
  }

  public async drawAndSafeGanttChart() {
    const filteredJobs = this.#filterJobWithValidStep()
    const title = this.#generateTitle()

    const ganttChart = new GanttChart({ title })

    this.#populateGanttChartWithJobs({
      ganttChart,
      jobs: filteredJobs
    })

    // Info: (20250118 - Murky) Make sure output folder is in <rootDir>/output
    FileSystem.initOutputFolder()

    const ganttMMDFilePath = this.#writeMermaidMMDFile({
      ganttChart,
      title
    })

    const outputPath = FileSystem.getOutputFilePath(title)

    await MermaidExporter.exportToImage({
      mermaidMMDFilePath: ganttMMDFilePath,
      outputPath
    })
  }
}
