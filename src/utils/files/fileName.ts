export default class FileName {
  readonly name: string

  constructor(name: Readonly<string>) {
    if (!name || name.length <= 0) {
      throw new Error('FileName need to be initialized at least 1 character')
    }

    this.name = name
  }
}
