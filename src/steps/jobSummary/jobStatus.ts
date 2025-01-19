import { WorkflowJobStatus } from '@/types/job.js'

export default class JobStatus {
  readonly status: WorkflowJobStatus

  constructor(status: Readonly<unknown>) {
    this.#assertIsWorkflowJobStatus(status)
    this.status = status
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
      throw new Error('Status is not WorkflowJobStepStatus')
    }
  }
}
