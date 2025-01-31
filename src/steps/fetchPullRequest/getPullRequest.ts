import { GitHubInstance } from '@/types/github.js'
import { PullRequestGithubResponseType } from '@/types/pullRequest.js'
import PullRequest from '@/utils/pullRequests/pullRequest.js'
import PullRequestNumber from '@/utils/pullRequests/pullRequestNumber.js'
import PullRequestSha from '@/utils/pullRequests/pullRequestSha.js'
import { Context } from '@actions/github/lib/context.js'

export default class GetPullRequest {
  readonly #octokit: GitHubInstance
  readonly #githubContext: Context

  constructor(args: { octokit: GitHubInstance; githubContext: Context }) {
    this.#octokit = args.octokit
    this.#githubContext = args.githubContext
  }

  async #fetchByOctokit(): Promise<PullRequestGithubResponseType> {
    const pullRequestNumber = PullRequestNumber.fromGithubContext(
      this.#githubContext
    )

    const {
      repo: { owner, repo }
    } = this.#githubContext

    const githubPullRequestResponse: PullRequestGithubResponseType =
      await this.#octokit.rest.pulls.get({
        owner,
        repo,
        pull_number: pullRequestNumber.pullNumber
      })

    if (githubPullRequestResponse.status !== 200) {
      throw new Error(
        `Fetch Pull Request from github failed with code: ${githubPullRequestResponse.status}`
      )
    }

    return githubPullRequestResponse
  }

  public async fetchFromGithub(): Promise<PullRequest> {
    const sha = PullRequestSha.fromContext(this.#githubContext)

    const githubPullRequestResponse = await this.#fetchByOctokit()

    const pullRequest = PullRequest.fromGithub({
      githubPullRequest: githubPullRequestResponse.data,
      sha
    })

    return pullRequest
  }
}
