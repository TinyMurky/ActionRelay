import { WorkflowJobStepStatus } from '@/types/job.js'

export class StepStatus {
  readonly status: WorkflowJobStepStatus

  constructor(status: Readonly<unknown>) {
    this.#assertIsWorkflowJobStepStatus(status)
    this.status = status
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
        `Status is not WorkflowJobStepStatus, input status: ${status}`
      )
    }
  }
}
