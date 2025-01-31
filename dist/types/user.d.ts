import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';
import { components } from '@octokit/openapi-types';
export type UserGithubType = components['schemas']['private-user'] | components['schemas']['public-user'];
export type PublicUserGithubType = components['schemas']['public-user'];
export type ContributorGithubResponseType = RestEndpointMethodTypes['repos']['listContributors']['response'];
export type ContributorGithubType = RestEndpointMethodTypes['repos']['listContributors']['response']['data'][0];
export type PullRequestUserGithubType = RestEndpointMethodTypes['pulls']['get']['response']['data']['user'];
