import { PullRequestStatusType } from '@/types/pullRequest.js'

export default class PullRequestStatus {
  readonly status: PullRequestStatusType

  constructor(status: Readonly<unknown>) {
    this.#assertIsPullRequestStatusType(status)
    this.status = status
  }

  /**
   * Convert unknown to {@link PullRequestStatusType}
   * Throw Error if not in enum
   */
  #assertIsPullRequestStatusType(
    status: Readonly<unknown>
  ): asserts status is PullRequestStatusType {
    if (
      !Object.values(PullRequestStatusType).includes(
        status as PullRequestStatusType
      )
    ) {
      throw new Error('Status is not PullRequestStatusType')
    }
  }
}
