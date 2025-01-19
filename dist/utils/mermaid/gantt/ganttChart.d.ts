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
