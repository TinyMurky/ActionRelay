import { WorkflowJobStepConclusion } from '@/types/job.js'

export class StepConclusion {
  readonly conclusion: WorkflowJobStepConclusion

  constructor(conclusion: Readonly<string | null>) {
    this.conclusion = this.#initConclusion(conclusion)
  }

  #initConclusion(
    conclusion: Readonly<string | null>
  ): WorkflowJobStepConclusion {
    if (!conclusion) {
      return WorkflowJobStepConclusion.unknown
    }

    if (!this.#isWorkflowJobStepConclusion(conclusion)) {
      throw new Error(
        `Conclusion must within ${Object.values(WorkflowJobStepConclusion).join(' | ')}`
      )
    }

    return conclusion
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
}
