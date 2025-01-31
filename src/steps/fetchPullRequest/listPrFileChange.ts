import { PullRequestFileGithubType } from '@/types/file.js'
import { GitHubInstance } from '@/types/github.js'
import PullRequestFile from '@/utils/files/pullRequestFile.js'
import PullRequestNumber from '@/utils/pullRequests/pullRequestNumber.js'
import { Context } from '@actions/github/lib/context.js'

export default class ListPrFileChange {
  readonly #octokit: GitHubInstance
  readonly #githubContext: Context

  constructor(args: { octokit: GitHubInstance; githubContext: Context }) {
    this.#octokit = args.octokit
    this.#githubContext = args.githubContext
  }

  public async fetchFromGithub(): Promise<PullRequestFile[]> {
    const githubPrFiles: PullRequestFileGithubType[] =
      await this.#fetchByOctokit()

    const prFiles: PullRequestFile[] = githubPrFiles.map((file) => {
      return PullRequestFile.fromGithub(file)
    })

    return prFiles
  }

  async #fetchByOctokit() {
    const pullRequestNumber = PullRequestNumber.fromGithubContext(
      this.#githubContext
    )

    const {
      repo: { owner, repo }
    } = this.#githubContext

    const githubPrFile: PullRequestFileGithubType[] =
      await this.#octokit.paginate(this.#octokit.rest.pulls.listFiles, {
        owner,
        repo,
        pull_number: pullRequestNumber.pullNumber
      })

    return githubPrFile
  }
}
