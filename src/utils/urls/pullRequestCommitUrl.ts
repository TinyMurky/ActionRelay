import CommitUrl from '@/utils/urls/commitUrl.js'
import Owner from '@/utils/repos/githubContextOwner.js'
import Repo from '@/utils/repos/githubContextRepo.js'
import { Context } from '@actions/github/lib/context.js'

export class PullRequestCommitUrl extends CommitUrl {
  constructor(
    args: Readonly<{
      commitId: string
      owner: Owner
      repo: Repo
    }>
  ) {
    const { commitId } = args

    if (!commitId) {
      throw new Error(
        'PullRequestCommitUrl initialized need to provide commitId that at least 1 character'
      )
    }

    super(args)
  }

  static fromContext(githubContext: Readonly<Context>) {
    const { repo, sha } = githubContext
    const { pull_request } = githubContext.payload
    const commitId: string =
      (pull_request && pull_request.head && pull_request.head.sha) || sha

    const newOwner = new Owner({
      name: repo.owner
    })

    const newRepo = new Repo({
      name: repo.repo
    })

    return new PullRequestCommitUrl({
      commitId,
      owner: newOwner,
      repo: newRepo
    })
  }
}
