import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'

export type RepositoryGithubResponseType =
  RestEndpointMethodTypes['repos']['get']['response']

export type RepositoryGithubType =
  RestEndpointMethodTypes['repos']['get']['response']['data']
