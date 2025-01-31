import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'

export type PullRequestGithubResponseType =
  RestEndpointMethodTypes['pulls']['get']['response']

export type PullRequestGithubType =
  RestEndpointMethodTypes['pulls']['get']['response']['data']

export enum PullRequestStatusType {
  open = 'open',
  closed = 'closed'
}
