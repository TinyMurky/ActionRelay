import { GitHubInstance } from '@/types/github.js'
import { ContributorGithubType, UserGithubType } from '@/types/user.js'
import Logger from '@/utils/logger.js'
import PublicUser from '@/utils/users/publicUser.js'
import { Context } from '@actions/github/lib/context.js'

/**
 * This class will fetch contributor of an repository,
 * than fetch more detail from get user by id api
 */
export default class ListContributor {
  readonly #octokit: GitHubInstance
  readonly #githubContext: Context

  constructor(args: { octokit: GitHubInstance; githubContext: Context }) {
    this.#octokit = args.octokit
    this.#githubContext = args.githubContext
  }

  async #fetchContributorByOctokit() {
    const {
      repo: { owner, repo }
    } = this.#githubContext

    let contributors: ContributorGithubType[]

    try {
      contributors = await this.#octokit.paginate(
        this.#octokit.rest.repos.listContributors,
        {
          owner,
          repo
        }
      )
    } catch (_error) {
      const error = _error as Error
      Logger.error(error)
      throw new Error(
        'Unable to fetch contributors from GitHub in #fetchContributorByOctokit'
      )
    }

    const constructorsWithId: (ContributorGithubType & { id: number })[] =
      contributors.filter(
        (contributor): contributor is ContributorGithubType & { id: number } =>
          contributor.id !== undefined
      )

    return constructorsWithId
  }

  async #fetchUserById(id: number) {
    try {
      const response = await this.#octokit.request('GET /user/{account_id}', {
        account_id: id,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

      const githubUser: UserGithubType = response.data

      return githubUser
    } catch (_error) {
      const error = _error as Error
      Logger.error(`Failed to fetch user with ID ${id}:`)
      Logger.error(error)
      return null
    }
  }

  #createUserInstance(githubUser: UserGithubType): PublicUser {
    return PublicUser.fromGithub(githubUser)
  }

  public async fetchFromGithub(): Promise<PublicUser[]> {
    let githubContributors: (ContributorGithubType & { id: number })[] = []

    try {
      githubContributors = await this.#fetchContributorByOctokit()
    } catch (_error) {
      const error = _error as Error
      Logger.error(error)
      throw new Error('Unable to fetch contributors from GitHub')
    }

    let githubUsers: UserGithubType[] = []

    try {
      const githubUsersWithNull = await Promise.all(
        githubContributors.map((contributor) =>
          this.#fetchUserById(contributor.id)
        )
      )

      githubUsers = githubUsersWithNull.filter((user) => user !== null)
    } catch (_error) {
      const error = _error as Error
      Logger.error(error)
      throw new Error('Unable to fetch users from GitHub')
    }

    const users = githubUsers.map((user) => this.#createUserInstance(user))

    return users
  }
}
