import Owner from '@/utils/repos/owner.js'
import Repo from '@/utils/repos/repo.js'

export default class GithubUrl {
  readonly owner: Owner
  readonly repo: Repo

  constructor(
    args: Readonly<{
      owner: Owner
      repo: Repo
    }>
  ) {
    const { owner, repo } = args

    this.owner = owner
    this.repo = repo
  }

  public static fromString(
    args: Readonly<{
      owner: string
      repo: string
    }>
  ) {
    const { owner, repo } = args
    const newOwner = new Owner({
      name: owner
    })
    const newRepo = new Repo({
      name: repo
    })

    return new GithubUrl({
      owner: newOwner,
      repo: newRepo
    })
  }

  public get url(): string {
    const url = `https://github.com/${this.owner.name}/${this.repo.name}`
    return url
  }
}
