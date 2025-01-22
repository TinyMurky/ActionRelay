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
import GanttTaskTag from '@/utils/mermaid/gantt/ganttTaskTag.js';
import CompleteTime from '@/utils/times/completeTime.js';
import StartTime from '@/utils/times/startTime.js';
export default class GanttTask {
    #private;
    readonly name: string;
    /**
     * Info: (20250116 - Murky)
     * Tag is defined by [Mermaid Gnatt Syntax](https://mermaid.js.org/syntax/gantt.html),
     * One task can have multiple tag
     * @example
     * Set up job : milestone, active, 1658073446000, 1658073450000
     */
    readonly tags: GanttTaskTag[];
    readonly startedAt: StartTime;
    readonly completedAt: CompleteTime;
    constructor(args: Readonly<{
        name: string;
        startedAt: StartTime;
        completedAt: CompleteTime;
        tags?: GanttTaskTag[];
    }>);
    pushTag(tag: Readonly<GanttTaskTag>): void;
    addActiveTag(): void;
    addDoneTag(): void;
    addCritTag(): void;
    addMilestoneTag(): void;
    addEmptyTag(): void;
    toString(): string;
}
