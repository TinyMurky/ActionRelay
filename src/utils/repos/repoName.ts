export default class RepoName {
  readonly name: string

  constructor(name: Readonly<string>) {
    if (!name) {
      throw new Error(
        'RepoName should be initialized by name at least 1 character'
      )
    }

    this.name = name
  }
}
