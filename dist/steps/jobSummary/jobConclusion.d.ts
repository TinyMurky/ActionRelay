import { WorkflowJobConclusion } from '@/types/job.js';
export declare class JobConclusion {
    #private;
    readonly conclusion: WorkflowJobConclusion;
    constructor(conclusion: Readonly<string | null>);
}
