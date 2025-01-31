import CommitSha from '@/utils/commits/commitSha.js'
import CommitMessage from '@/utils/commits/commitMessage.js'
import { CommitGithubType } from '@/types/commit.js'

export default class Commit {
  readonly sha: CommitSha
  readonly message: CommitMessage

  constructor(
    args: Readonly<{
      sha: CommitSha
      message: CommitMessage
    }>
  ) {
    const { sha, message } = args

    this.sha = sha
    this.message = message
  }

  public static fromGithub(githubCommit: Readonly<CommitGithubType>) {
    const sha = new CommitSha(githubCommit.sha)
    const message = new CommitMessage(githubCommit.commit.message)

    return new Commit({
      sha,
      message
    })
  }

  public toJson() {
    const { sha, message } = this

    const json = {
      sha: sha.sha,
      message: message.content
    }

    return json
  }
}
