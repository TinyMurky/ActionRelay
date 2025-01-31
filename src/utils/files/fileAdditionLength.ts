export default class FileAdditionLength {
  readonly length: number

  constructor(length: Readonly<number>) {
    if (!Number.isInteger(length)) {
      throw new Error(
        'length need to be integer when initialize FileAdditionLength'
      )
    }

    if (length < 0) {
      throw new Error(
        'length need to be non negative when initialize FileAdditionLength'
      )
    }
    this.length = length
  }
}
