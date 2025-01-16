import { WorkflowJobStep } from '@/apis/repos/workflowJobStep.js';
import { WorkflowJobConclusion, WorkflowJobStatus, WorkflowJobType } from '@/types/job.js';
export declare class WorkflowJob {
    #private;
    /**
     * The id of the job.
     */
    readonly id: number;
    /**
     * The id of the associated workflow run.
     */
    readonly runId: number;
    /**
     * URL of the associated workflow run.
     */
    readonly runUrl: string;
    /**
     * Attempt number of the associated workflow run.
     */
    readonly runAttempt: number;
    /**
     * The id of the node.
     */
    readonly nodeId: string;
    /**
     * The SHA of the commit being run.
     */
    readonly headSha: string;
    /**
     * API URL of the job.
     */
    readonly url: string;
    /**
     * HTML URL of the job.
     */
    readonly htmlUrl: string;
    /**
     * The phase of the lifecycle that the job is currently in.
     */
    readonly status: WorkflowJobStatus;
    /**
     * The outcome of the job.
     */
    readonly conclusion: WorkflowJobConclusion;
    /**
     * Time when the job was created.
     */
    readonly createdAt: Date;
    /**
     * Time when the job started.
     */
    readonly startedAt: Date | null;
    /**
     * Time when the job completed.
     */
    readonly completedAt: Date | null;
    /**
     * Name of the job.
     */
    readonly name: string;
    /**
     * Steps in the job.
     */
    readonly steps: WorkflowJobStep[];
    /**
     * ex: https://api.github.com/repos/github/hello-world/check-runs/4"
     */
    readonly checkRunUrl: string;
    /**
     * Labels for the workflow job. Specified by the \"runs_on\" attribute in the action's workflow file.
     */
    readonly labels: string[];
    /**
     * The ID of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be 0.)
     */
    readonly runnerId: number;
    /**
     * The name of the runner to which this job has been assigned. (If a runner hasn't yet been assigned, this will be ''.)
     */
    readonly runnerName: string;
    /**
     * The ID of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be 0.)
     */
    readonly runnerGroupId: number;
    /**
     * The name of the runner group to which this job has been assigned. (If a runner hasn't yet been assigned, this will be ''.)"
     */
    readonly runnerGroupName: string;
    /**
     * The name of the workflow. If null will be assign as ''
     */
    readonly workflowName: string;
    /**
     * The name of the current branch. If null will be assign as ''
     */
    readonly headBranch: string;
    constructor(job: Readonly<WorkflowJobType>);
    /**
     * Check if the job has started.
     */
    isStarted(): boolean;
    /**
     * Check if the job is completed.
     */
    isCompleted(): boolean;
}
