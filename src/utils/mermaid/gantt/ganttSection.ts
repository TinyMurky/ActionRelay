import { GanttTask } from '@/utils/mermaid/gantt/ganttTask.js'
import { CompleteTime } from '@/utils/times/completeTime.js'
import { StartTime } from '@/utils/times/startTime.js'
import { GanttTaskTag } from './ganttTaskTag.js'

/**
 * Info: (20250117 - Murky)
 *
 * In [Mermaid Gantt Syntax](https://mermaid.js.org/syntax/gantt.html)
 * One Section have multiple task
 * and one task can have multiple tag
 *
 * @example
 * section Critical tasks
 * Set up job                          :milestone, 1658073446000, 1658073450000
 * Completed task in the critical line :crit, done, 1658073451000, 1658073453000
 * Implement parser and json           :done, 1658073453000after, 1658073458000
 * Create tests for parser             :1658073459000, 1658073654000
 */
export class GanttSection {
  readonly name: string
  readonly tasks: GanttTask[]

  constructor(
    args: Readonly<{
      name: string
      tasks?: GanttTask[]
    }>
  ) {
    const { name, tasks } = args

    if (!name) {
      throw new Error(
        'GanttSection must provide name that length is larger than 0'
      )
    }

    this.name = name

    if (tasks && tasks.length > 0) {
      this.tasks = tasks
    } else {
      this.tasks = []
    }
  }

  /**
   * Add a pre-existing GanttTask instance to the section.
   */
  pushTask(task: Readonly<GanttTask>): void {
    this.tasks.push(task)
  }

  /**
   * Create and add a new task directly to the section.
   */
  addTask(
    args: Readonly<{
      name: string
      startedAt: StartTime
      completedAt: CompleteTime
      tags?: GanttTaskTag[]
    }>
  ): void {
    const task = new GanttTask(args)
    this.tasks.push(task)
  }

  toString(): string {
    const sectionTitleSyntax = '    section ' + this.name + '\n'
    const tagsSyntax = this.tasks.map((task) => task.toString()).join('\n')
    const sectionSyntax = sectionTitleSyntax + tagsSyntax
    return sectionSyntax
  }
}