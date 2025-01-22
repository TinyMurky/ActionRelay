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
import GanttSection from '@/utils/mermaid/gantt/ganttSection.js';
import GanttTask from '@/utils/mermaid/gantt/ganttTask.js';
import CompleteTime from '@/utils/times/completeTime.js';
import StartTime from '@/utils/times/startTime.js';
import GanttTaskTag from '@/utils/mermaid/gantt/ganttTaskTag.js';
export default class GanttChart {
    #private;
    readonly title: string;
    readonly sections: GanttSection[];
    constructor(args: Readonly<{
        title: string;
        sections?: GanttSection[];
    }>);
    /**
     * Create and add a new task directly to the section.
     */
    pushSection(section: Readonly<GanttSection>): void;
    /**
     * Create and add a new section directly to the chart.
     */
    addSection(args: Readonly<{
        name: string;
        tasks?: GanttTask[];
    }>): void;
    /**
     * Add a pre-existing GanttTask instance to the last section in ganttChart.
     */
    pushTaskToLastSection(task: Readonly<GanttTask>): void;
    /**
     * Create and add a new task directly to the last section in ganttChart.
     */
    addTaskToLastSection(args: Readonly<{
        name: string;
        startedAt: StartTime;
        completedAt: CompleteTime;
        tags?: GanttTaskTag[];
    }>): void;
    toMermaidSyntax(): string;
}
