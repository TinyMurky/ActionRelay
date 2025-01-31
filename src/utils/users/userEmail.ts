export default class UserEmail {
  static #EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

  readonly email: string

  constructor(email: Readonly<string>) {
    if (!this.#isEmail(email)) {
      throw new Error('UserEmail must be initialized by real email')
    }

    this.email = email
  }

  #isEmail(email: Readonly<string>): boolean {
    return UserEmail.#EMAIL_REGEX.test(email)
  }
}
