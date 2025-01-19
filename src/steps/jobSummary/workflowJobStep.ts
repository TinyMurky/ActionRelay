import CompleteTime from '@/utils/times/completeTime.js'
import StartTime from '@/utils/times/startTime.js'
import StepStatus from '@/steps/jobSummary/stepStatus.js'
import StepConclusion from '@/steps/jobSummary/stepConclusion.js'

export default class WorkflowJobStep {
  static readonly MIN_STEP_NUMBER = 1

  /**
   * The name of the job.
   */
  readonly name: string

  /**
   * The phase of the lifecycle that the job is currently in.
   */
  readonly status: StepStatus

  /**
   * The outcome of the job.
   * Ex: "Success"
   * Will be empty string if not provided
   */
  readonly conclusion: StepConclusion

  /**
   * Step No, Start from 1
   */
  readonly number: number

  /**
   * The time that the step started, in ISO 8601 format.
   */
  readonly startedAt: StartTime | null

  /**
   * The time that the job finished, in ISO 8601 format.
   */
  readonly completedAt: CompleteTime | null

  constructor(
    step: Readonly<{
      status: 'queued' | 'in_progress' | 'completed'
      conclusion: string | null
      name: string
      number: number
      started_at?: string | null
      completed_at?: string | null
    }>
  ) {
    this.name = step.name

    this.status = new StepStatus(step.status)

    this.conclusion = new StepConclusion(step.conclusion)

    if (step.number < WorkflowJobStep.MIN_STEP_NUMBER) {
      throw new Error(
        '[WorkflowJobStep init error]: step number must larger then 0'
      )
    }

    this.number = step.number

    this.startedAt = step.started_at
      ? StartTime.fromISOString(step.started_at)
      : null

    this.completedAt = step.completed_at
      ? CompleteTime.fromISOString(step.completed_at)
      : null
  }

  /**
   * Info: (20250114 - Murky)
   * Check if step is started by checking if startedAt has value
   */
  public isStarted(): boolean {
    return !!this.startedAt
  }

  /**
   * Info: (20250114 - Murky)
   * Check if step is completed by checking if completedAt has value
   */
  public isCompleted(): boolean {
    return !!this.completedAt
  }

  /**
   * Info: (20250117 - Murky)
   * Get gantt tag base on conclusion
   */
  public get ganttTag() {
    return this.conclusion.ganttTag
  }
}
