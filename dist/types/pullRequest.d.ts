import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';
export type PullRequestGithubResponseType = RestEndpointMethodTypes['pulls']['get']['response'];
export type PullRequestGithubType = RestEndpointMethodTypes['pulls']['get']['response']['data'];
export declare enum PullRequestStatusType {
    open = "open",
    closed = "closed"
}
