import { components } from '@octokit/openapi-types'
/**
 * The phase of the lifecycle that the job is currently in.
 */
export enum WorkflowJobStepStatus {
  queue,
  in_progress,
  completed
}

export enum WorkflowJobStepConclusion {
  failure,
  skipped,
  success,
  cancelled,
  unknown
}

export type WorkflowJobType = components['schemas']['job']

export enum WorkflowJobStatus {
  queued,
  in_progress,
  completed,
  waiting,
  requested,
  pending
}

export enum WorkflowJobConclusion {
  success,
  failure,
  neutral,
  cancelled,
  skipped,
  timed_out,
  action_required,
  unknown
}
