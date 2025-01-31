import GithubContextOwner from '@/utils/repos/githubContextOwner.js'
import GithubContextRepo from '@/utils/repos/githubContextRepo.js'

export default class GithubUrl {
  readonly owner: GithubContextOwner
  readonly repo: GithubContextRepo

  constructor(
    args: Readonly<{
      owner: GithubContextOwner
      repo: GithubContextRepo
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
    const newOwner = new GithubContextOwner({
      name: owner
    })
    const newRepo = new GithubContextRepo({
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
