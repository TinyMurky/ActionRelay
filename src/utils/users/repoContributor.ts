import UserEmail from '@/utils/users/userEmail.js'
import UserName from '@/utils/users/userName.js'
import UserAvatarUrl from '@/utils/users/userAvatarUrl.js'
import { ContributorGithubType } from '@/types/user.js'

export default class RepoContributor {
  readonly id: number
  readonly avatarUrl: UserAvatarUrl | null
  readonly name: UserName | null
  readonly email: UserEmail | null

  constructor(
    args: Readonly<{
      id?: number
      avatarUrl: UserAvatarUrl | null
      name: UserName | null
      email: UserEmail | null
    }>
  ) {
    if (!args.id) {
      throw new Error('Id need to be provided when initialize RepoContributor')
    }

    if (!Number.isInteger(args.id)) {
      throw new Error('Id need to be integer when initialize RepoContributor')
    }

    if (args.id <= 0) {
      throw new Error(
        'Id need to be larger than 0 when initialize RepoContributor'
      )
    }

    this.id = args.id
    this.avatarUrl = args.avatarUrl
    this.name = args.name
    this.email = args.email
  }

  public static fromGithub(user: ContributorGithubType) {
    const { id, avatar_url, name, email } = user

    const userAvatarUrl = avatar_url ? new UserAvatarUrl(avatar_url) : null
    const userName = name ? new UserName(name) : null
    const userEmail = email ? new UserEmail(email) : null

    return new RepoContributor({
      id,
      avatarUrl: userAvatarUrl,
      name: userName,
      email: userEmail
    })
  }
}
