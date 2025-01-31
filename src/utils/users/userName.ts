export default class UserName {
  readonly name: string

  constructor(name: Readonly<string>) {
    if (!name || name.length <= 0) {
      throw new Error('UserName must be initialized at least one character')
    }

    this.name = name
  }
}
