export default class UserAvatarUrl {
  readonly url: string

  constructor(url: Readonly<string>) {
    if (!url || url.length <= 0) {
      throw new Error('UserAvatarUrl must be initialized at least 1 character.')
    }

    this.url = url
  }
}
