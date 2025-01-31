import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'
import GithubContextOwner from '@/utils/repos/githubContextOwner.js'
import GithubContextRepo from '@/utils/repos/githubContextRepo.js'

export default class PullRequestCommitter {
  private readonly octokit: GitHubInstance
  private readonly owner: GithubContextOwner
  private readonly repo: GithubContextRepo
  private readonly pullRequestId: number

  constructor(args: Readonly<{ octokit: GitHubInstance; context: Context }>) {
    const { octokit, context } = args

    if (!context.payload.pull_request) {
      throw new Error('Context does not contain a pull request')
    }

    this.octokit = octokit
    this.owner = new GithubContextOwner({ name: context.repo.owner })
    this.repo = new GithubContextRepo({ name: context.repo.repo })
    this.pullRequestId = context.payload.pull_request.number
  }

  async postComment(body: Readonly<string>) {
    await this.octokit.rest.issues.createComment({
      owner: this.owner.name,
      repo: this.repo.name,
      issue_number: this.pullRequestId,
      body
    })
  }
}
