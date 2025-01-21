import { WorkflowJobStatus } from '@/types/job.js';
export default class JobStatus {
    #private;
    readonly status: WorkflowJobStatus;
    constructor(status: Readonly<unknown>);
}
