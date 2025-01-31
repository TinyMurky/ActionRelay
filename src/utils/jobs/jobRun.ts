/**
 * Info: (20250116 - Murky)
 * JobRun is not store all information from github repos run api
 * this will only store run related data inside job
 */
export default class JobRun {
  static readonly MIN_ID = 1

  /**
   * The id of the associated workflow run.
   */
  readonly id: number

  /**
   * URL of the api of associated workflow run.
   * ex: https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425
   */
  readonly url: string

  /**
   * Attempt number of the associated workflow run.
   */
  readonly attempt: number

  constructor(
    args: Readonly<{
      id: number
      url: string
      attempt: number | undefined
    }>
  ) {
    const { id, url, attempt } = args

    if (id < JobRun.MIN_ID) {
      throw new Error(
        `Id of JobRun must equal or larger than ${JobRun.MIN_ID}, id provided: ${id}`
      )
    }

    this.id = id

    if (!url) {
      throw new Error(`url of JobRun must not be empty`)
    }

    this.url = url

    this.attempt = attempt || 0
  }

  public toJson() {
    const { id, url, attempt } = this

    const json = {
      id: id,
      url: url,
      attempt: attempt
    }

    return json
  }
}
