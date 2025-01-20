import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'
import PullRequestCommitter from '@/utils/github/pullRequestCommitter.js'
import IssueCommitter from '@/utils/github/issueCommitter.js'

export default class GithubCommitter {
  private readonly pullRequestCommitter?: PullRequestCommitter
  private readonly issueCommitter: IssueCommitter

  constructor(
    args: Readonly<{ octokit: GitHubInstance; githubContext: Context }>
  ) {
    const { octokit, githubContext } = args

    this.issueCommitter = new IssueCommitter({
      octokit,
      context: githubContext
    })

    if (githubContext.payload.pull_request) {
      this.pullRequestCommitter = new PullRequestCommitter({
        octokit,
        context: githubContext
      })
    }
  }

  async createComment(
    args: Readonly<{ body: string; postToPullRequest: boolean }>
  ) {
    const { body, postToPullRequest } = args

    if (!body) {
      throw new Error(
        'Body must have at least 1 character when creating a comment'
      )
    }

    if (postToPullRequest) {
      if (!this.pullRequestCommitter) {
        throw new Error('Pull request handler is not available in this context')
      }
      return this.pullRequestCommitter.postComment(body)
    } else {
      return this.issueCommitter.postComment(body)
    }
  }
}
