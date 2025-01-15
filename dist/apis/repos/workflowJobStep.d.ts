import { WorkflowJobStepConclusion, WorkflowJobStepStatus } from '@/types/job.js';
export declare class WorkflowJobStep {
    #private;
    static readonly MIN_STEP_NUMBER = 1;
    /**
     * The name of the job.
     */
    readonly name: string;
    /**
     * The phase of the lifecycle that the job is currently in.
     */
    readonly status: WorkflowJobStepStatus;
    /**
     * The outcome of the job.
     * Ex: "Success"
     * Will be empty string if not provided
     */
    readonly conclusion: WorkflowJobStepConclusion;
    /**
     * Step No, Start from 1
     */
    readonly number: number;
    /**
     * The time that the step started, in ISO 8601 format.
     */
    readonly startedAt: Date | null;
    /**
     * The time that the job finished, in ISO 8601 format.
     */
    readonly completedAt: Date | null;
    constructor(step: Readonly<{
        status: 'queued' | 'in_progress' | 'completed';
        conclusion: string | null;
        name: string;
        number: number;
        started_at?: string | null;
        completed_at?: string | null;
    }>);
    /**
     * Info: (20250114 - Murky)
     * Check if step is started by checking if startedAt has value
     */
    isStarted(): boolean;
    /**
     * Info: (20250114 - Murky)
     * Check if step is completed by checking if completedAt has value
     */
    isCompleted(): boolean;
}
