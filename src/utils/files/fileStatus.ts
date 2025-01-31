import { PullRequestFileStatusType } from '@/types/file.js'

export default class FileStatus {
  readonly status: PullRequestFileStatusType

  constructor(status: Readonly<unknown>) {
    this.#assertIsPullRequestFileStatusType(status)
    this.status = status
  }

  /**
   * Convert unknown to PullRequestFileStatusType
   * Throw Error if not in enum
   */
  #assertIsPullRequestFileStatusType(
    status: Readonly<unknown>
  ): asserts status is PullRequestFileStatusType {
    if (
      !Object.values(PullRequestFileStatusType).includes(
        status as PullRequestFileStatusType
      )
    ) {
      throw new Error('Status is not WorkflowJobStepStatus')
    }
  }
}
