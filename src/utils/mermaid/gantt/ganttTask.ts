import { GanttChartTaskTag } from '@/types/ganttChart.js'
import GanttTaskTag from '@/utils/mermaid/gantt/ganttTaskTag.js'
import CompleteTime from '@/utils/times/completeTime.js'
import StartTime from '@/utils/times/startTime.js'

export default class GanttTask {
  static #MILESTONE_KEYWORDS = ['Set up job', 'Complete job']

  readonly name: string

  /**
   * Info: (20250116 - Murky)
   * Tag is defined by [Mermaid Gnatt Syntax](https://mermaid.js.org/syntax/gantt.html),
   * One task can have multiple tag
   * @example
   * Set up job : milestone, active, 1658073446000, 1658073450000
   */
  readonly tags: GanttTaskTag[]

  readonly startedAt: StartTime

  readonly completedAt: CompleteTime

  constructor(
    args: Readonly<{
      name: string
      startedAt: StartTime
      completedAt: CompleteTime
      tags?: GanttTaskTag[]
    }>
  ) {
    const { name, tags, startedAt, completedAt } = args

    if (!name) {
      throw new Error(
        'GanttTask must provide name that length is larger than 0'
      )
    }

    this.name = name

    this.tags = tags ? tags : []

    // Info: (20250116 - Murky) all param in startedAt is readonly,
    // so it is safe to not init new one
    this.startedAt = startedAt

    // Info: (20250116 - Murky) all param in completedAt is readonly,
    // so it is safe to not init new one
    this.completedAt = completedAt

    this.#addMilestoneTagIfApplicable()
  }

  public pushTag(tag: Readonly<GanttTaskTag>): void {
    const copyTag = new GanttTaskTag(tag.tag)
    this.tags.push(copyTag)
  }

  public addActiveTag(): void {
    return this.pushTag(GanttTaskTag.active())
  }

  public addDoneTag(): void {
    return this.pushTag(GanttTaskTag.done())
  }

  public addCritTag(): void {
    return this.pushTag(GanttTaskTag.crit())
  }

  public addMilestoneTag(): void {
    return this.pushTag(GanttTaskTag.milestone())
  }

  public addEmptyTag(): void {
    return this.pushTag(GanttTaskTag.empty())
  }

  public toString(): string {
    const tagsSyntax: string = Array.from(
      new Set(this.tags.map((tag) => tag.toString()))
    ).join(' ')

    const startedAtTimestamp = Math.min(
      this.startedAt.timestamp,
      this.completedAt.timestamp
    )

    const ganttTaskSyntax: string =
      '    ' +
      this.name +
      ' :' +
      tagsSyntax +
      ' ' +
      startedAtTimestamp +
      ', ' +
      this.completedAt.timestamp

    return ganttTaskSyntax
  }

  #addMilestoneTagIfApplicable() {
    if (this.#isMilestoneTask() && !this.#isMilestoneTagExist()) {
      this.addMilestoneTag()
    }
  }

  #isMilestoneTask(): boolean {
    return GanttTask.#MILESTONE_KEYWORDS.some((keyword) =>
      this.name.includes(keyword)
    )
  }

  #isMilestoneTagExist(): boolean {
    return this.tags.some((tag) => tag.tag === GanttChartTaskTag.milestone)
  }
}
