import { GanttChartTaskTag } from '@/types/ganttChart.js'

export class GanttTaskTag {
  static readonly #tagToStringMap: Record<GanttChartTaskTag, string> = {
    [GanttChartTaskTag.active]: 'active,',
    [GanttChartTaskTag.done]: 'done,',
    [GanttChartTaskTag.crit]: 'crit,',
    [GanttChartTaskTag.milestone]: 'milestone,',
    [GanttChartTaskTag.empty]: ''
  }

  readonly tag: GanttChartTaskTag

  constructor(tag: Readonly<string | GanttChartTaskTag>) {
    this.#assertIsGanttChartTaskTab(tag)
    this.tag = tag
  }

  static fromString(tag: Readonly<string>) {
    return new GanttTaskTag(tag)
  }

  static active() {
    return new GanttTaskTag(GanttChartTaskTag.active)
  }

  static done() {
    return new GanttTaskTag(GanttChartTaskTag.done)
  }

  static crit() {
    return new GanttTaskTag(GanttChartTaskTag.crit)
  }

  static milestone() {
    return new GanttTaskTag(GanttChartTaskTag.milestone)
  }

  static empty() {
    return new GanttTaskTag(GanttChartTaskTag.empty)
  }

  public toString() {
    return GanttTaskTag.#tagToStringMap[this.tag]
  }

  /**
   * Convert unknown to GanttChartTaskTab
   * Throw Error if not in enum
   */
  #assertIsGanttChartTaskTab(
    tag: Readonly<unknown>
  ): asserts tag is GanttChartTaskTag {
    if (!Object.values(GanttChartTaskTag).includes(tag as GanttChartTaskTag)) {
      throw new Error('Status is not WorkflowJobStepStatus')
    }
  }
}
