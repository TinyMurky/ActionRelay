export default class RepoFullName {
  readonly name: string

  constructor(name: Readonly<string>) {
    if (!name) {
      throw new Error(
        'RepoFullName should be initialized by name at least 1 character'
      )
    }

    this.name = name
  }
}
