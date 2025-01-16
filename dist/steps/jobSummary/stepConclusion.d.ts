import { WorkflowJobStepConclusion } from '@/types/job.js';
export declare class StepConclusion {
    #private;
    readonly conclusion: WorkflowJobStepConclusion;
    constructor(conclusion: Readonly<string | null>);
}
