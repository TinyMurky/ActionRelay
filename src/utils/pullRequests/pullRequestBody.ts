export default class PullRequestBody {
  readonly content: string

  constructor(content: Readonly<string | null>) {
    if (!content || content.length <= 0) {
      throw new Error(
        'PullRequestBody need to  be initialize by content with at least 1 character.'
      )
    }

    this.content = content.replace('\r', '')
  }
}
