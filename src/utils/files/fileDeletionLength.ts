export default class FileDeletionLength {
  readonly length: number

  constructor(length: Readonly<number>) {
    if (!Number.isInteger(length)) {
      throw new Error(
        'length need to be integer when initialize FileDeletionLength'
      )
    }

    if (length < 0) {
      throw new Error(
        'length need to be non negative when initialize FileDeletionLength'
      )
    }

    this.length = length
  }
}
