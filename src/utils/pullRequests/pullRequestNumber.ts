import { Context } from '@actions/github/lib/context.js'

export default class PullRequestNumber {
  readonly pullNumber: number

  constructor(pullNumber: Readonly<number>) {
    this.pullNumber = pullNumber
  }

  public static fromGithubContext(githubContext: Context) {
    const pullNumber = githubContext.payload.pull_request?.number

    if (!pullNumber) {
      throw new Error(
        'To list all commits from pull request, pull request and pull request number must exist in Github Context'
      )
    }

    return new PullRequestNumber(pullNumber)
  }
}
