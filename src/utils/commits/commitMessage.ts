export default class CommitMessage {
  readonly content: string

  constructor(content: Readonly<string>) {
    if (!content || content.length <= 0) {
      throw new Error(
        'CommitMessage need to be initialized by content at least 1 character'
      )
    }

    this.content = content.replace('\r', '')
  }
}
