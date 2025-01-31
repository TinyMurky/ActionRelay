import UserEmail from '@/utils/users/userEmail.js'
import UserName from '@/utils/users/userName.js'
import UserAvatarUrl from '@/utils/users/userAvatarUrl.js'
import { PublicUserGithubType } from '@/types/user.js'

/**
 * Init by github get user by id [api](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user-using-their-id)
 */
export default class PublicUser {
  readonly id: number
  readonly avatarUrl: UserAvatarUrl
  readonly name: UserName | null
  readonly email: UserEmail | null

  constructor(
    args: Readonly<{
      id: number
      avatarUrl: UserAvatarUrl
      name: UserName | null
      email: UserEmail | null
    }>
  ) {
    if (!args.id) {
      throw new Error('Id need to be provided when initialize PublicUser')
    }

    if (!Number.isInteger(args.id)) {
      throw new Error('Id need to be integer when initialize PublicUser')
    }

    if (args.id <= 0) {
      throw new Error('Id need to be larger than 0 when initialize PublicUser')
    }

    this.id = args.id
    this.avatarUrl = args.avatarUrl
    this.name = args.name
    this.email = args.email
  }

  public static fromGithub(user: PublicUserGithubType) {
    const { id, avatar_url, name, email } = user

    const userAvatarUrl = new UserAvatarUrl(avatar_url)
    const userName = name ? new UserName(name) : null
    const userEmail = email ? new UserEmail(email) : null

    return new PublicUser({
      id,
      avatarUrl: userAvatarUrl,
      name: userName,
      email: userEmail
    })
  }

  public toJson() {
    const { id, avatarUrl, name, email } = this

    const json = {
      id: id,
      avatarUrl: avatarUrl.url,
      name: name ? name.name : null,
      email: email ? email.email : null
    }

    return json
  }
}
