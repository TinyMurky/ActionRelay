import { CommitGithubType } from '@/types/commit.js'
import { GitHubInstance } from '@/types/github.js'
import Commit from '@/utils/commits/commit.js'
import PullRequestNumber from '@/utils/pullRequests/pullRequestNumber.js'
import { Context } from '@actions/github/lib/context.js'

export default class ListPrCommit {
  readonly #octokit: GitHubInstance
  readonly #githubContext: Context

  constructor(args: { octokit: GitHubInstance; githubContext: Context }) {
    this.#octokit = args.octokit
    this.#githubContext = args.githubContext
  }

  public async fetchFromGithub(): Promise<Commit[]> {
    const githubCommits: CommitGithubType[] = await this.#fetchCommitByOctokit()

    const commits: Commit[] = githubCommits.map((githubCommit) =>
      Commit.fromGithub(githubCommit)
    )

    return commits
  }

  async #fetchCommitByOctokit() {
    const pullRequestNumber = PullRequestNumber.fromGithubContext(
      this.#githubContext
    )

    const {
      repo: { owner, repo }
    } = this.#githubContext

    const githubCommits: CommitGithubType[] = await this.#octokit.paginate(
      this.#octokit.rest.pulls.listCommits,
      {
        owner,
        repo,
        pull_number: pullRequestNumber.pullNumber
      }
    )

    return githubCommits
  }
}
