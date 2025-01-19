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
