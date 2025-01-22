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
import { GanttChartTaskTag } from '@/types/ganttChart.js';
/**
 * Info: (20250117 - Murky)
 * active is light blue
 * done is gray
 * crit is red
 * milestone is diamond shape
 */
export default class GanttTaskTag {
    #private;
    readonly tag: GanttChartTaskTag;
    constructor(tag: Readonly<string | GanttChartTaskTag>);
    static fromString(tag: Readonly<string>): GanttTaskTag;
    static active(): GanttTaskTag;
    static done(): GanttTaskTag;
    static crit(): GanttTaskTag;
    static milestone(): GanttTaskTag;
    static empty(): GanttTaskTag;
    toString(): string;
}
