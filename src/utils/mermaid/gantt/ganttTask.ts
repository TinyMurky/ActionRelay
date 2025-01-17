import { GanttTaskTag } from '@/utils/mermaid/gantt/ganttTaskTag.js'
import { CompleteTime } from '@/utils/times/completeTime.js'
import { StartTime } from '@/utils/times/startTime.js'

export class GanttTask {
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
    const tagsSyntax: string = this.tags.map((tag) => tag.toString()).join(' ')
    const ganttTaskSyntax: string =
      '    ' +
      this.name +
      ' :' +
      tagsSyntax +
      ' ' +
      this.startedAt.timestamp +
      ', ' +
      this.completedAt.timestamp

    return ganttTaskSyntax
  }
}
