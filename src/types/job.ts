import { components } from '@octokit/openapi-types'
/**
 * The phase of the lifecycle that the job is currently in.
 */
export enum WorkflowJobStepStatus {
  queue = 'queue',
  in_progress = 'in_progress',
  completed = 'completed',
  pending = 'pending'
}

export enum WorkflowJobStepConclusion {
  failure = 'failure',
  skipped = 'skipped',
  success = 'success',
  cancelled = 'cancelled',
  unknown = 'unknown'
}

export type WorkflowJobType = components['schemas']['job']

export enum WorkflowJobStatus {
  queued = 'queued',
  in_progress = 'in_progress',
  completed = 'completed',
  waiting = 'waiting',
  requested = 'requested',
  pending = 'pending'
}

export enum WorkflowJobConclusion {
  success = 'success',
  failure = 'failure',
  neutral = 'neutral',
  cancelled = 'cancelled',
  skipped = 'skipped',
  timed_out = 'timed_out',
  action_required = 'action_required',
  unknown = 'unknown'
}
