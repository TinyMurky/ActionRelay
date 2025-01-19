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
