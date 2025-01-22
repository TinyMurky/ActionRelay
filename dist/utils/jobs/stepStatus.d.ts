import { WorkflowJobStepStatus } from '@/types/job.js';
export default class StepStatus {
    #private;
    readonly status: WorkflowJobStepStatus;
    constructor(status: Readonly<unknown>);
}
