import Owner from '@/utils/repos/owner.js'
import Repo from '@/utils/repos/repo.js'
import GithubUrl from '@/utils/urls/githubUrl.js'

export default class JobUrl extends GithubUrl {
  readonly jobId: number

  constructor(
    args: Readonly<{
      jobId: number
      owner: Owner
      repo: Repo
    }>
  ) {
    const { jobId, owner, repo } = args

    if (jobId <= 0) {
      throw new Error(
        'JobUrl initialized need to provide jobId that at least 1'
      )
    }

    super({
      owner,
      repo
    })

    this.jobId = jobId
  }

  public static fromString(
    args: Readonly<{
      jobId: number
      owner: string
      repo: string
    }>
  ) {
    const { jobId, owner, repo } = args
    const newOwner = new Owner({
      name: owner
    })
    const newRepo = new Repo({
      name: repo
    })

    return new JobUrl({
      jobId,
      owner: newOwner,
      repo: newRepo
    })
  }

  public get url(): string {
    const githubUrl = super.url
    const url = `${githubUrl}/runs/${this.jobId}?check_suite_focus=true`
    return url
  }
}
