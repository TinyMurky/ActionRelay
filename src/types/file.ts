import { components } from '@octokit/openapi-types'

export type PullRequestFileGithubType = components['schemas']['diff-entry']

export enum PullRequestFileStatusType {
  added = 'added',
  removed = 'removed',
  modified = 'modified',
  renamed = 'renamed',
  copied = 'copied',
  changed = 'changed',
  unchanged = 'unchanged'
}
