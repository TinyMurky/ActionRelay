import { WorkflowJobStepStatus } from '@/types/job.js';
export declare class StepStatus {
    #private;
    readonly status: WorkflowJobStepStatus;
    constructor(status: Readonly<unknown>);
}
