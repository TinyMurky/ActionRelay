import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'
import Owner from '@/utils/repos/owner.js'
import Repo from '@/utils/repos/repo.js'

export default class IssueCommitter {
  private readonly octokit: GitHubInstance
  private readonly owner: Owner
  private readonly repo: Repo
  private readonly issueNumber: number

  constructor(args: Readonly<{ octokit: GitHubInstance; context: Context }>) {
    const { octokit, context } = args

    this.octokit = octokit
    this.owner = new Owner({ name: context.repo.owner })
    this.repo = new Repo({ name: context.repo.repo })
    this.issueNumber = context.issue.number
  }

  async postComment(body: Readonly<string>) {
    await this.octokit.rest.issues.createComment({
      owner: this.owner.name,
      repo: this.repo.name,
      issue_number: this.issueNumber,
      body
    })
  }
}
