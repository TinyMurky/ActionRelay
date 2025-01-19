import { WorkflowJobConclusion } from '@/types/job.js'

export default class JobConclusion {
  readonly conclusion: WorkflowJobConclusion

  constructor(conclusion: Readonly<string | null>) {
    this.conclusion = this.#initConclusion(conclusion)
  }

  /**
   * Info: (20250116 - Murky)
   * falsy will be set as unknown,
   * other will check if it is matching WorkflowJobConclusion
   */
  #initConclusion(conclusion: Readonly<string | null>): WorkflowJobConclusion {
    if (!conclusion) {
      return WorkflowJobConclusion.unknown
    }

    if (!this.#isWorkflowJobConclusion(conclusion)) {
      throw new Error(
        `Conclusion must within ${Object.values(WorkflowJobConclusion).join(' | ')}`
      )
    }

    return conclusion
  }

  /**
   * Info: (20250114 - Murky)
   * Type guard of isWorkflowJobConclusion
   */
  #isWorkflowJobConclusion(
    conclusion: Readonly<unknown>
  ): conclusion is WorkflowJobConclusion {
    const isConclusion = Object.values(WorkflowJobConclusion).includes(
      conclusion as WorkflowJobConclusion
    )

    return isConclusion
  }
}
