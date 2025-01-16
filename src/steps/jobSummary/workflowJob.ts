import { WorkflowJobStep } from '@/steps/jobSummary/workflowJobStep.js'
import {
  WorkflowJobConclusion,
  WorkflowJobStatus,
  WorkflowJobType
} from '@/types/job.js'

export class WorkflowJob {
  /**
   * The id of the job.
   */
  readonly id: number

  /**
   * The id of the associated workflow run.
   */
  readonly runId: number

  /**
   * URL of the associated workflow run.
   */
  readonly runUrl: string

  /**
   * Attempt number of the associated workflow run.
   */
  readonly runAttempt: number

  /**
   * The id of the node.
   */
  readonly nodeId: string

  /**
   * The SHA of the commit being run.
   */
  readonly headSha: string

  /**
   * API URL of the job.
   */
  readonly url: string

  /**
   * HTML URL of the job.
   */
  readonly htmlUrl: string

  /**
   * The phase of the lifecycle that the job is currently in.
   */
  readonly status: WorkflowJobStatus

  /**
   * The outcome of the job.
   */
  readonly conclusion: WorkflowJobConclusion

  /**
   * Time when the job was created.
   */
  readonly createdAt: Date

  /**
   * Time when the job started.
   */
  readonly startedAt: Date | null

  /**
   * Time when the job completed.
   */
  readonly completedAt: Date | null

  /**
   * Name of the job.
   */
  readonly name: string

  /**
   * Steps in the job.
   */
  readonly steps: WorkflowJobStep[]

  /**
   * ex: https://api.github.com/repos/github/hello-world/check-runs/4"
   */
  readonly checkRunUrl: string

  /**
   * Labels for the workflow job. Specified by the \"runs_on\" attribute in the action's workflow file.
   */
  readonly labels: string[]

  /**
   * The ID of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be 0.)
   */
  readonly runnerId: number

  /**
   * The name of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be ''.)
   */
  readonly runnerName: string

  /**
   * The ID of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be 0.)
   */
  readonly runnerGroupId: number

  /**
   * The name of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be ''.)"
   */
  readonly runnerGroupName: string

  /**
   * The name of the workflow. If null will be assign as ''
   */
  readonly workflowName: string

  /**
   * The name of the current branch. If null will be assign as ''
   */
  readonly headBranch: string

  constructor(job: Readonly<WorkflowJobType>) {
    this.id = job.id
    this.runId = job.run_id
    this.runUrl = job.run_url
    this.runAttempt = job.run_attempt || 0
    this.nodeId = job.node_id
    this.headSha = job.head_sha
    this.url = job.url
    this.htmlUrl = job.html_url ?? ''

    this.#assertIsWorkflowJobStatus(job.status)
    this.status = job.status
    this.conclusion = this.#initConclusion(job.conclusion)
    const createdAt = this.#initDateFromISO8601(job.created_at)

    if (!createdAt) {
      throw new Error(
        '[WorkflowJob init error]: createdAt must have date value'
      )
    }

    this.createdAt = createdAt

    this.startedAt = this.#initDateFromISO8601(job.started_at)
    this.completedAt = this.#initDateFromISO8601(job.completed_at)
    this.name = job.name

    // Initialize steps as WorkflowJobStep instances
    console.log(job?.steps)
    this.steps = job?.steps
      ? job?.steps.map((step) => new WorkflowJobStep(step))
      : []

    this.checkRunUrl = job.check_run_url
    this.labels = job.labels
    this.runnerId = job.runner_id || 0
    this.runnerName = job.runner_name || ''
    this.runnerGroupId = job.runner_group_id || 0
    this.runnerGroupName = job.runner_group_name || ''
    this.workflowName = job.workflow_name || ''
    this.headBranch = job.head_branch || ''
  }

  #isValidDate(date: Readonly<Date>) {
    return date instanceof Date && !isNaN(date.getTime())
  }

  #initDateFromISO8601(date: Readonly<string | null | undefined>): Date | null {
    if (!date) {
      return null
    }

    const initializedDate = new Date(date)

    if (!this.#isValidDate(initializedDate)) {
      throw new Error('[WorkflowJob init error]: Invalid date format')
    }

    return initializedDate
  }

  /**
   * Convert unknown to WorkflowJobStatus
   * Throw Error if not in enum
   */
  #assertIsWorkflowJobStatus(
    status: Readonly<unknown>
  ): asserts status is WorkflowJobStatus {
    if (
      !Object.values(WorkflowJobStatus).includes(status as WorkflowJobStatus)
    ) {
      throw new Error(
        '[WorkflowJobStep init error]: Status is not  WorkflowJobStepStatus'
      )
    }
  }

  /**
   * Info: (20250114 - Murky)
   * Type guard of isWorkflowJobConclusion
   */
  #isWorkflowJobStepConclusion(
    conclusion: Readonly<unknown>
  ): conclusion is WorkflowJobConclusion {
    const isConclusion = Object.values(WorkflowJobConclusion).includes(
      conclusion as WorkflowJobConclusion
    )

    return isConclusion
  }

  #initConclusion(conclusion: Readonly<string | null>): WorkflowJobConclusion {
    if (!conclusion) {
      return WorkflowJobConclusion.unknown
    }

    if (!this.#isWorkflowJobStepConclusion(conclusion)) {
      throw new Error(
        `[WorkflowJobStep init error]: Conclusion must within ${Object.values(WorkflowJobConclusion).join(' | ')}`
      )
    }

    return conclusion
  }

  /**
   * Check if the job has started.
   */
  public isStarted(): boolean {
    return !!this.startedAt
  }

  /**
   * Check if the job is completed.
   */
  public isCompleted(): boolean {
    return !!this.completedAt
  }
}
