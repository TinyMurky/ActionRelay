import { GanttChartTaskTag } from '@/types/ganttChart.js';
import { WorkflowJobStepConclusion } from '@/types/job.js';
export default class StepConclusion {
    #private;
    readonly conclusion: WorkflowJobStepConclusion;
    constructor(conclusion: Readonly<string | null>);
    get ganttTag(): GanttChartTaskTag;
}
