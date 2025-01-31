import PullRequestStatus from '@/utils/pullRequests/pullRequestStatus.js'
import CreateTime from '@/utils/times/createTime.js'
import UpdateTime from '@/utils/times/updateTime.js'
import MergeTime from '@/utils/times/mergeTime.js'
import CloseTime from '@/utils/times/closeTime.js'
import PullRequestBody from '@/utils/pullRequests/pullRequestBody.js'
import { PullRequestGithubType } from '@/types/pullRequest.js'
import PullRequestSha from '@/utils/pullRequests/pullRequestSha.js'
import PullRequestUser from '@/utils/users/pullRequestUser.js'

export default class PullRequest {
  readonly id: number
  readonly sha: PullRequestSha
  readonly body: PullRequestBody
  readonly state: PullRequestStatus
  readonly user: PullRequestUser
  readonly createdAt: CreateTime
  readonly updatedAt: UpdateTime
  readonly mergedAt: MergeTime | null
  readonly closedAt: CloseTime | null

  constructor(
    args: Readonly<{
      id: number
      sha: PullRequestSha
      body: PullRequestBody
      state: PullRequestStatus
      user: PullRequestUser
      createdAt: CreateTime
      updatedAt: UpdateTime
      mergedAt: MergeTime | null
      closedAt: CloseTime | null
    }>
  ) {
    if (!args.id) {
      throw new Error('Id need to be provided when initialize Pull Request')
    }

    if (!Number.isInteger(args.id)) {
      throw new Error('Id need to be integer when initialize Pull Request')
    }

    if (args.id <= 0) {
      throw new Error(
        'Id need to be larger than 0 when initialize Pull Request'
      )
    }

    this.id = args.id
    this.sha = args.sha
    this.body = args.body
    this.state = args.state
    this.user = args.user
    this.createdAt = args.createdAt
    this.updatedAt = args.updatedAt
    this.mergedAt = args.mergedAt
    this.closedAt = args.closedAt
  }

  public static fromGithub(
    args: Readonly<{
      githubPullRequest: PullRequestGithubType
      sha: PullRequestSha | string
    }>
  ) {
    const { githubPullRequest, sha } = args
    const id = githubPullRequest.id
    const shaInstance =
      sha instanceof PullRequestSha ? sha : new PullRequestSha(sha)
    const body = new PullRequestBody(githubPullRequest.body)
    const state = new PullRequestStatus(githubPullRequest.state)
    const user = PullRequestUser.fromGithub(githubPullRequest.user)
    const createdAt = CreateTime.fromISOString(githubPullRequest.created_at)
    const updatedAt = UpdateTime.fromISOString(githubPullRequest.updated_at)
    const mergedAt = githubPullRequest?.merged_at
      ? MergeTime.fromISOString(githubPullRequest.merged_at)
      : null
    const closedAt = githubPullRequest?.closed_at
      ? CloseTime.fromISOString(githubPullRequest.closed_at)
      : null

    return new PullRequest({
      id,
      sha: shaInstance,
      body,
      state,
      user,
      createdAt,
      updatedAt,
      mergedAt,
      closedAt
    })
  }

  public toJson() {
    const {
      id,
      sha,
      body,
      state,
      user,
      createdAt,
      updatedAt,
      mergedAt,
      closedAt
    } = this

    const json = {
      id: id,
      sha: sha.sha,
      body: body.content,
      state: state.status.toString(),
      user: user.toJson(),
      createdAt: createdAt.timestamp,
      updatedAt: updatedAt.timestamp,
      mergedAt: mergedAt ? mergedAt.timestamp : null,
      closedAt: closedAt ? closedAt.timestamp : null
    }

    return json
  }
}
