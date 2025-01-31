import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods'
import { components } from '@octokit/openapi-types'
// export type PublicUserGithubType = {
//   login: string
//   id: number
//   user_view_type: string
//   node_id: string
//   avatar_url: string
//   gravatar_id: string | null
//   url: string
//   html_url: string
//   followers_url: string
//   following_url: string
//   gists_url: string
//   starred_url: string
//   subscriptions_url: string
//   organizations_url: string
//   repos_url: string
//   events_url: string
//   received_events_url: string
//   type: string
//   site_admin: boolean
//   name: string | null
//   company: string | null
//   blog: string | null
//   location: string | null
//   email: string | null
//   notification_email: string | null
//   hireable: boolean | null
//   bio: string | null
//   twitter_username: string | null
//   public_repos: number
//   public_gists: number
//   followers: number
//   following: number
//   created_at: string // ISO date string
//   updated_at: string // ISO date string
//   plan?: {
//     collaborators: number
//     name: string
//     space: number
//     private_repos: number
//   }
//   private_gists?: number
//   total_private_repos?: number
//   owned_private_repos?: number
//   disk_usage?: number
//   collaborators?: number
// }

export type UserGithubType =
  | components['schemas']['private-user']
  | components['schemas']['public-user']

export type PublicUserGithubType = components['schemas']['public-user']

export type ContributorGithubResponseType =
  RestEndpointMethodTypes['repos']['listContributors']['response']

export type ContributorGithubType =
  RestEndpointMethodTypes['repos']['listContributors']['response']['data'][0]

export type PullRequestUserGithubType =
  RestEndpointMethodTypes['pulls']['get']['response']['data']['user']
