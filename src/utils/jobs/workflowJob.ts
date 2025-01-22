import WorkflowJobStep from '@/utils/jobs/workflowJobStep.js'
import {
  WorkflowJobConclusion,
  WorkflowJobStatus,
  WorkflowJobType
} from '@/types/job.js'
import CompleteTime from '@/utils/times/completeTime.js'
import CreateTime from '@/utils/times/createTime.js'
import StartTime from '@/utils/times/startTime.js'
import JobStatus from '@/utils/jobs/jobStatus.js'
import JobConclusion from '@/utils/jobs/jobConclusion.js'
import JobRun from '@/utils/jobs/jobRun.js'

export default class WorkflowJob {
  /**
   * The id of the job.
   */
  readonly id: number

  /**
   * Info: (20250116 - Murky)
   * workflow run related data
   */
  readonly run: JobRun

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
  readonly status: JobStatus

  /**
   * The outcome of the job.
   */
  readonly conclusion: JobConclusion

  /**
   * Time when the job was created.
   */
  readonly createdAt: CreateTime

  /**
   * Time when the job started.
   */
  readonly startedAt: StartTime | null

  /**
   * Time when the job completed.
   */
  readonly completedAt: CompleteTime | null

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

  private constructor(
    args: Readonly<{
      id: number
      run: JobRun
      nodeId: string
      headSha: string
      url: string
      htmlUrl: string
      status: JobStatus
      conclusion: JobConclusion
      createdAt: CreateTime
      startedAt: StartTime | null
      completedAt: CompleteTime | null
      name: string
      steps: WorkflowJobStep[]
      checkRunUrl: string
      labels: string[]
      runnerId: number
      runnerName: string
      runnerGroupId: number
      runnerGroupName: string
      workflowName: string
      headBranch: string
    }>
  ) {
    this.id = args.id
    this.run = args.run
    this.nodeId = args.nodeId
    this.headSha = args.headSha
    this.url = args.url
    this.htmlUrl = args.htmlUrl
    this.status = args.status
    this.conclusion = args.conclusion
    this.createdAt = args.createdAt
    this.startedAt = args.startedAt
    this.completedAt = args.completedAt
    this.name = args.name
    this.steps = args.steps
    this.checkRunUrl = args.checkRunUrl
    this.labels = args.labels
    this.runnerId = args.runnerId
    this.runnerName = args.runnerName
    this.runnerGroupId = args.runnerGroupId
    this.runnerGroupName = args.runnerGroupName
    this.workflowName = args.workflowName
    this.headBranch = args.headBranch
  }

  /**
   * Info: (20250117 - Murky)
   * Transform data from github octokit to WorkflowJob
   */
  static fromGithub(job: Readonly<WorkflowJobType>) {
    const id: number = job.id
    const run = new JobRun({
      id: job.run_id,
      url: job.run_url,
      attempt: job.run_attempt
    })
    const nodeId: string = job.node_id
    const headSha: string = job.head_sha
    const url: string = job.url
    const htmlUrl: string = job.html_url ?? ''

    const status = new JobStatus(job.status)
    const conclusion = new JobConclusion(job.conclusion)

    const createdAt: CreateTime = CreateTime.fromISOString(job.created_at)

    const startedAt: StartTime | null = job.started_at
      ? StartTime.fromISOString(job.started_at)
      : null

    const completedAt: CompleteTime | null = job.completed_at
      ? CompleteTime.fromISOString(job.completed_at)
      : null

    const name: string = job.name

    const steps: WorkflowJobStep[] = job?.steps
      ? job?.steps.map((step) => new WorkflowJobStep(step))
      : []

    const checkRunUrl: string = job.check_run_url
    const labels: string[] = job.labels
    const runnerId: number = job.runner_id || 0
    const runnerName: string = job.runner_name || ''
    const runnerGroupId: number = job.runner_group_id || 0
    const runnerGroupName = job.runner_group_name || ''
    const workflowName = job.workflow_name || ''
    const headBranch = job.head_branch || ''

    return new WorkflowJob({
      id,
      run,
      nodeId,
      headSha,
      url,
      htmlUrl,
      status,
      conclusion,
      createdAt,
      startedAt,
      completedAt,
      name,
      steps,
      checkRunUrl,
      labels,
      runnerId,
      runnerName,
      runnerGroupId,
      runnerGroupName,
      workflowName,
      headBranch
    })
  }

  /**
   * Check if the job has started.
   */
  public isStarted(): boolean {
    return !!this.startedAt
  }

  /**
   * Check if the job is completed by check if status is completed
   */
  public isCompleted(): boolean {
    return this.status.status === WorkflowJobStatus.completed
  }

  public isSuccess(): boolean {
    return this.conclusion.conclusion === WorkflowJobConclusion.success
  }

  public filterStepWithBothStartAtAndCompleteAt(): WorkflowJob {
    const filteredSteps = this.steps.filter(
      (step) => step.isStarted() && step.isCompleted()
    )

    return new WorkflowJob({
      id: this.id,
      run: this.run,
      nodeId: this.nodeId,
      headSha: this.headSha,
      url: this.url,
      htmlUrl: this.htmlUrl,
      status: this.status,
      conclusion: this.conclusion,
      createdAt: this.createdAt,
      startedAt: this.startedAt,
      completedAt: this.completedAt,
      name: this.name,
      steps: filteredSteps,
      checkRunUrl: this.checkRunUrl,
      labels: this.labels,
      runnerId: this.runnerId,
      runnerName: this.runnerName,
      runnerGroupId: this.runnerGroupId,
      runnerGroupName: this.runnerGroupName,
      workflowName: this.workflowName,
      headBranch: this.headBranch
    })
  }
}
