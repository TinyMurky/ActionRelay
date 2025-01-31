import { GitHubInstance } from '@/types/github.js'
import { UserGithubType } from '@/types/user.js'
import Logger from '@/utils/logger.js'
import PublicUser from '@/utils/users/publicUser.js'

export default class GetPrCreator {
  readonly #octokit: GitHubInstance
  readonly #targetUserId: number

  constructor(args: { octokit: GitHubInstance; targetUserId: number }) {
    this.#octokit = args.octokit

    if (!args.targetUserId) {
      throw new Error('Id need to be provided when initialize Pull Request')
    }

    if (!Number.isInteger(args.targetUserId)) {
      throw new Error('Id need to be integer when initialize Pull Request')
    }

    if (args.targetUserId <= 0) {
      throw new Error(
        'Id need to be larger than 0 when initialize Pull Request'
      )
    }

    this.#targetUserId = args.targetUserId
  }

  async #fetchUserById() {
    try {
      const response = await this.#octokit.request('GET /user/{account_id}', {
        account_id: this.#targetUserId,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

      const githubUser: UserGithubType = response.data

      return githubUser
    } catch (_error) {
      const error = _error as Error
      Logger.error(`Failed to fetch user with ID ${this.#targetUserId}:`)
      Logger.error(error)
      throw error
    }
  }

  #createUserInstance(githubUser: UserGithubType): PublicUser {
    return PublicUser.fromGithub(githubUser)
  }

  public async fetchFromGithub(): Promise<PublicUser> {
    let githubUser: UserGithubType

    try {
      githubUser = await this.#fetchUserById()
    } catch (_error) {
      const error = _error as Error
      Logger.error(error)
      throw new Error('Unable to fetch users from GitHub')
    }

    const users = this.#createUserInstance(githubUser)

    return users
  }
}
