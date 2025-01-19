import { GanttChartTaskTag } from '@/types/ganttChart.js'
import { WorkflowJobStepConclusion } from '@/types/job.js'

export default class StepConclusion {
  /**
   * Custom mapping between with Gantt tag
   */
  static readonly #conclusionGanttTagMapping: Record<
    WorkflowJobStepConclusion,
    GanttChartTaskTag
  > = {
    [WorkflowJobStepConclusion.success]: GanttChartTaskTag.empty, // dark blue
    [WorkflowJobStepConclusion.failure]: GanttChartTaskTag.crit, // red
    [WorkflowJobStepConclusion.skipped]: GanttChartTaskTag.done, // grey
    [WorkflowJobStepConclusion.cancelled]: GanttChartTaskTag.done, // grey
    [WorkflowJobStepConclusion.unknown]: GanttChartTaskTag.done // grey
  }

  readonly conclusion: WorkflowJobStepConclusion

  constructor(conclusion: Readonly<string | null>) {
    this.conclusion = StepConclusion.#initConclusion(conclusion)
  }

  static #initConclusion(
    conclusion: Readonly<string | null>
  ): WorkflowJobStepConclusion {
    if (!conclusion) {
      return WorkflowJobStepConclusion.unknown
    }

    if (!StepConclusion.#isWorkflowJobStepConclusion(conclusion)) {
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
  static #isWorkflowJobStepConclusion(
    conclusion: Readonly<unknown>
  ): conclusion is WorkflowJobStepConclusion {
    const isConclusion = Object.values(WorkflowJobStepConclusion).includes(
      conclusion as WorkflowJobStepConclusion
    )

    return isConclusion
  }

  public get ganttTag() {
    return StepConclusion.#conclusionGanttTagMapping[this.conclusion]
  }
}
