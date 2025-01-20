import WorkflowJob from '@/steps/jobSummary/workflowJob.js';
import { Context } from '@actions/github/lib/context.js';
export default class JobGanttChartDrawer {
    #private;
    constructor(args: Readonly<{
        jobs: Readonly<WorkflowJob[]>;
        githubContext: Readonly<Context>;
    }>);
    generateGanttChartParagraph(): Promise<string>;
}
