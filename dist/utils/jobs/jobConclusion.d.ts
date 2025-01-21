import { WorkflowJobConclusion } from '@/types/job.js';
export default class JobConclusion {
    #private;
    readonly conclusion: WorkflowJobConclusion;
    constructor(conclusion: Readonly<string | null>);
}
