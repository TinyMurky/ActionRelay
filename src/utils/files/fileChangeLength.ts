export default class FileChangeLength {
  readonly length: number

  constructor(length: Readonly<number>) {
    if (!Number.isInteger(length)) {
      throw new Error(
        'length need to be integer when initialize FileChangeLength'
      )
    }

    if (length < 0) {
      throw new Error(
        'length need to be non negative when initialize FileChangeLength'
      )
    }

    this.length = length
  }
}
