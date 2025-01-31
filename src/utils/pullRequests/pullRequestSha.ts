import { Sha } from '@/types/sha.js'
import { Context } from '@actions/github/lib/context.js'

export default class PullRequestSha implements Sha {
  private static SHA_LENGTH = 40

  readonly sha: string

  constructor(sha: Readonly<string>) {
    if (sha.length !== PullRequestSha.SHA_LENGTH) {
      throw Error(
        `SHA need to be the string that has ${PullRequestSha.SHA_LENGTH} length`
      )
    }

    this.sha = sha
  }

  public static fromContext(githubContext: Context) {
    const { pull_request } = githubContext.payload
    if (!pull_request?.head?.sha) {
      throw new Error(
        'To init PullRequestSha from Context, the trigger must be pull request event'
      )
    }

    return new PullRequestSha(pull_request.head.sha)
  }
}
