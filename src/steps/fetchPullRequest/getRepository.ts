import { GitHubInstance } from '@/types/github.js'
import {
  RepositoryGithubResponseType,
  RepositoryGithubType
} from '@/types/repository.js'
import Logger from '@/utils/logger.js'
import Repository from '@/utils/repos/repository.js'
import { Context } from '@actions/github/lib/context.js'

/**
 * This class will fetch contributor of an repository,
 * than fetch more detail from get user by id api
 */
export default class GetRepository {
  readonly #octokit: GitHubInstance
  readonly #githubContext: Context

  constructor(args: { octokit: GitHubInstance; githubContext: Context }) {
    this.#octokit = args.octokit
    this.#githubContext = args.githubContext
  }

  async #fetchRepositoryByOctokit() {
    const {
      repo: { owner, repo }
    } = this.#githubContext

    let response: RepositoryGithubResponseType

    try {
      response = await this.#octokit.rest.repos.get({
        owner,
        repo
      })
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        'Can not fetch repository from Octokit in #fetchRepositoryByOctokit'
      )
      Logger.error(error)
      throw error
    }

    const githubRepository: RepositoryGithubType = response.data

    return githubRepository
  }

  #createRepositoryInstance(githubRepository: RepositoryGithubType) {
    return Repository.fromGithub(githubRepository)
  }

  public async fetchFromGithub() {
    let githubRepository: RepositoryGithubType

    try {
      githubRepository = await this.#fetchRepositoryByOctokit()
    } catch (_error) {
      const error = _error as Error
      Logger.error('Can not fetch repository from Octokit in fetchFromGithub')
      Logger.error(error)
      throw error
    }

    const repository: Repository =
      this.#createRepositoryInstance(githubRepository)

    return repository
  }
}
