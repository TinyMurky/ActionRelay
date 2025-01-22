/**
 * Source: [catchpoint/workflow-telemetry-action](https://github.com/catchpoint/workflow-telemetry-action/tree/master)
 * Copyright (c) 2025 Catchpoint Systems 

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import GanttTask from '@/utils/mermaid/gantt/ganttTask.js'
import CompleteTime from '@/utils/times/completeTime.js'
import StartTime from '@/utils/times/startTime.js'
import GanttTaskTag from '@/utils/mermaid/gantt/ganttTaskTag.js'

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
export default class GanttSection {
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
    const newTask = new GanttTask({
      name: task.name,
      startedAt: task.startedAt,
      completedAt: task.completedAt,
      tags: task.tags
    })
    this.tasks.push(newTask)
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
