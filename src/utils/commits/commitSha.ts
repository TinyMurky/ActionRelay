import { Sha } from '@/types/sha.js'

export default class CommitSha implements Sha {
  private static SHA_LENGTH = 40

  readonly sha: string

  constructor(sha: Readonly<string>) {
    if (sha.length !== CommitSha.SHA_LENGTH) {
      throw Error(
        `SHA need to be the string that has ${CommitSha.SHA_LENGTH} length`
      )
    }

    this.sha = sha
  }
}
