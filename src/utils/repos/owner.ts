/**
 * Store owner of repo (or issue) from github context
 */
export default class Owner {
  readonly name: string

  constructor(
    args: Readonly<{
      name: string
    }>
  ) {
    const { name } = args

    if (!name) {
      throw new Error(
        'Owner should be initialized by name at least 1 character'
      )
    }

    this.name = name
  }
}
