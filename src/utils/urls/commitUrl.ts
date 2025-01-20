import Owner from '@/utils/repos/owner.js'
import Repo from '@/utils/repos/repo.js'
import GithubUrl from '@/utils/urls/githubUrl.js'

export default class CommitUrl extends GithubUrl {
  readonly commitId: string

  constructor(
    args: Readonly<{
      commitId: string
      owner: Owner
      repo: Repo
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
    const newOwner = new Owner({
      name: owner
    })
    const newRepo = new Repo({
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
