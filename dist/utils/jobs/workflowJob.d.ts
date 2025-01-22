import WorkflowJobStep from '@/utils/jobs/workflowJobStep.js';
import { WorkflowJobType } from '@/types/job.js';
import CompleteTime from '@/utils/times/completeTime.js';
import CreateTime from '@/utils/times/createTime.js';
import StartTime from '@/utils/times/startTime.js';
import JobStatus from '@/utils/jobs/jobStatus.js';
import JobConclusion from '@/utils/jobs/jobConclusion.js';
import JobRun from '@/utils/jobs/jobRun.js';
export default class WorkflowJob {
    /**
     * The id of the job.
     */
    readonly id: number;
    /**
     * Info: (20250116 - Murky)
     * workflow run related data
     */
    readonly run: JobRun;
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
    readonly status: JobStatus;
    /**
     * The outcome of the job.
     */
    readonly conclusion: JobConclusion;
    /**
     * Time when the job was created.
     */
    readonly createdAt: CreateTime;
    /**
     * Time when the job started.
     */
    readonly startedAt: StartTime | null;
    /**
     * Time when the job completed.
     */
    readonly completedAt: CompleteTime | null;
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
    private constructor();
    /**
     * Info: (20250117 - Murky)
     * Transform data from github octokit to WorkflowJob
     */
    static fromGithub(job: Readonly<WorkflowJobType>): WorkflowJob;
    /**
     * Check if the job has started.
     */
    isStarted(): boolean;
    /**
     * Check if the job is completed by check if status is completed
     */
    isCompleted(): boolean;
    isSuccess(): boolean;
    filterStepWithBothStartAtAndCompleteAt(): WorkflowJob;
}
