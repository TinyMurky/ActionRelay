import { WorkflowJobStep } from '@/steps/jobSummary/workflowJobStep.js'
import { WorkflowJobType } from '@/types/job.js'
import { CompleteTime } from '@/utils/times/completeTime.js'
import { CreateTime } from '@/utils/times/createTime.js'
import { StartTime } from '@/utils/times/startTime.js'
import { JobStatus } from '@/steps/jobSummary/jobStatus.js'
import { JobConclusion } from '@/steps/jobSummary/jobConclusion.js'
import { JobRun } from '@/steps/jobSummary/jobRun.js'

export class WorkflowJob {
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

  constructor(job: Readonly<WorkflowJobType>) {
    this.id = job.id
    this.run = new JobRun({
      id: job.run_id,
      url: job.run_url,
      attempt: job.run_attempt
    })
    this.nodeId = job.node_id
    this.headSha = job.head_sha
    this.url = job.url
    this.htmlUrl = job.html_url ?? ''

    this.status = new JobStatus(job.status)
    this.conclusion = new JobConclusion(job.conclusion)

    this.createdAt = CreateTime.fromISOString(job.created_at)

    this.startedAt = job.started_at
      ? StartTime.fromISOString(job.started_at)
      : null

    this.completedAt = job.completed_at
      ? CompleteTime.fromISOString(job.completed_at)
      : null

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
