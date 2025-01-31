import { Sha } from '@/types/sha.js'

export default class FileSha implements Sha {
  private static SHA_LENGTH = 40

  readonly sha: string

  constructor(sha: Readonly<string>) {
    if (sha.length !== FileSha.SHA_LENGTH) {
      throw Error(
        `SHA need to be the string that has ${FileSha.SHA_LENGTH} length`
      )
    }

    this.sha = sha
  }
}
