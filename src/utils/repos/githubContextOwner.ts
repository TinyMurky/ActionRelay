/**
 * Store owner of repo (or issue) from github context
 */
export default class GithubContextOwner {
  readonly name: string

  constructor(
    args: Readonly<{
      name: string
    }>
  ) {
    const { name } = args

    if (!name) {
      throw new Error(
        'GithubContextOwner should be initialized by name at least 1 character'
      )
    }

    this.name = name
  }
}
