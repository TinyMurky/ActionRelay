/**
 * Store name of repo (or issue) from github context
 */
export default class GithubContextRepo {
  readonly name: string

  constructor(
    args: Readonly<{
      name: string
    }>
  ) {
    const { name } = args

    if (!name) {
      throw new Error(
        'GithubContextRepo should be initialized by name at least 1 character'
      )
    }

    this.name = name
  }
}
