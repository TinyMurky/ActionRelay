import GithubContextOwner from '@/utils/repos/githubContextOwner.js'
import GithubContextRepo from '@/utils/repos/githubContextRepo.js'
import GithubUrl from '@/utils/urls/githubUrl.js'

export default class CommitUrl extends GithubUrl {
  readonly commitId: string

  constructor(
    args: Readonly<{
      commitId: string
      owner: GithubContextOwner
      repo: GithubContextRepo
    }>
  ) {
    const { commitId, owner, repo } = args

    if (!commitId) {
      throw new Error(
        'CommitUrl initialized need to provide commitId that at least 1 character'
      )
    }

    super({
      owner,
      repo
    })

    this.commitId = commitId
  }

  public static fromString(
    args: Readonly<{
      commitId: string
      owner: string
      repo: string
    }>
  ) {
    const { commitId, owner, repo } = args
    const newOwner = new GithubContextOwner({
      name: owner
    })
    const newRepo = new GithubContextRepo({
      name: repo
    })

    return new CommitUrl({
      commitId,
      owner: newOwner,
      repo: newRepo
    })
  }

  public get url(): string {
    const githubUrl = super.url
    const url = `${githubUrl}/commit/${this.commitId}`
    return url
  }
}
