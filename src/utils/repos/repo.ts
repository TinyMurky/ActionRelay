/**
 * Store name of repo (or issue) from github context
 */
export default class Repo {
  readonly name: string

  constructor(
    args: Readonly<{
      name: string
    }>
  ) {
    const { name } = args

    if (!name) {
      throw new Error('Repo should be initialized by name at least 1 character')
    }

    this.name = name
  }
}
