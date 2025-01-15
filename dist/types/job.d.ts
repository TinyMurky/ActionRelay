import { components } from '@octokit/openapi-types';
/**
 * The phase of the lifecycle that the job is currently in.
 */
export declare enum WorkflowJobStepStatus {
    queue = 0,
    in_progress = 1,
    completed = 2
}
export declare enum WorkflowJobStepConclusion {
    failure = 0,
    skipped = 1,
    success = 2,
    cancelled = 3,
    unknown = 4
}
export type WorkflowJobType = components['schemas']['job'];
export declare enum WorkflowJobStatus {
    queued = 0,
    in_progress = 1,
    completed = 2,
    waiting = 3,
    requested = 4,
    pending = 5
}
export declare enum WorkflowJobConclusion {
    success = 0,
    failure = 1,
    neutral = 2,
    cancelled = 3,
    skipped = 4,
    timed_out = 5,
    action_required = 6,
    unknown = 7
}
