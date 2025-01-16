import {
  WorkflowJobStepConclusion,
  WorkflowJobStepStatus
} from '@/types/job.js'

export class WorkflowJobStep {
  static readonly MIN_STEP_NUMBER = 0

  /**
   * The name of the job.
   */
  readonly name: string

  /**
   * The phase of the lifecycle that the job is currently in.
   */
  readonly status: WorkflowJobStepStatus

  /**
   * The outcome of the job.
   * Ex: "Success"
   * Will be empty string if not provided
   */
  readonly conclusion: WorkflowJobStepConclusion

  /**
   * Step No, Start from 1
   */
  readonly number: number

  /**
   * The time that the step started, in ISO 8601 format.
   */
  readonly startedAt: Date | null

  /**
   * The time that the job finished, in ISO 8601 format.
   */
  readonly completedAt: Date | null

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

    this.#assertIsWorkflowJobStepStatus(step.status)
    this.status = step.status

    this.conclusion = this.#initConclusion(step.conclusion)

    if (step.number <= WorkflowJobStep.MIN_STEP_NUMBER) {
      throw new Error(
        '[WorkflowJobStep init error]: step number must larger then 0'
      )
    }

    this.number = step.number

    this.startedAt = this.#initDateFromISO8601(step.started_at)
    this.completedAt = this.#initDateFromISO8601(step.completed_at)
  }

  /**
   * Convert unknown to WorkflowJobStepStatus
   * Throw Error if not in enum
   */
  #assertIsWorkflowJobStepStatus(
    status: Readonly<unknown>
  ): asserts status is WorkflowJobStepStatus {
    if (
      !Object.values(WorkflowJobStepStatus).includes(
        status as WorkflowJobStepStatus
      )
    ) {
      throw new Error(
        '[WorkflowJobStep init error]: Status is not  WorkflowJobStepStatus'
      )
    }
  }

  /**
   * Info: (20250114 - Murky)
   * Type guard of isWorkflowJobStepConclusion
   */
  #isWorkflowJobStepConclusion(
    conclusion: Readonly<unknown>
  ): conclusion is WorkflowJobStepConclusion {
    const isConclusion = Object.values(WorkflowJobStepConclusion).includes(
      conclusion as WorkflowJobStepConclusion
    )

    return isConclusion
  }

  #initConclusion(
    conclusion: Readonly<string | null>
  ): WorkflowJobStepConclusion {
    if (!conclusion) {
      return WorkflowJobStepConclusion.unknown
    }

    if (!this.#isWorkflowJobStepConclusion(conclusion)) {
      throw new Error(
        `[WorkflowJobStep init error]: Conclusion must within ${Object.values(WorkflowJobStepConclusion).join(' | ')}`
      )
    }

    return conclusion
  }

  /**
   * Check Date is not "invalid date"
   */
  #isValidDate(date: Readonly<Date>) {
    return date instanceof Date && !isNaN(date.getTime())
  }

  #initDateFromISO8601(date: Readonly<string | null | undefined>): Date | null {
    if (!date) {
      return null
    }

    const initializedDate = new Date(date)

    if (!this.#isValidDate(initializedDate)) {
      return null
    }

    return initializedDate
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
}
