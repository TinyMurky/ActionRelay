import { WorkflowJobStatus } from '@/types/job.js';
export declare class JobStatus {
    #private;
    readonly status: WorkflowJobStatus;
    constructor(status: Readonly<unknown>);
}
