import { PullRequestFileGithubType } from '@/types/file.js'
import FileAdditionLength from '@/utils/files/fileAdditionLength.js'
import FileChangeLength from '@/utils/files/fileChangeLength.js'
import FileDeletionLength from '@/utils/files/fileDeletionLength.js'
import FileName from '@/utils/files/fileName.js'
import FileSha from '@/utils/files/fileSha.js'
import FileStatus from '@/utils/files/fileStatus.js'

export default class PullRequestFile {
  readonly sha: FileSha
  readonly filename: FileName
  readonly status: FileStatus
  readonly additions: FileAdditionLength
  readonly deletions: FileDeletionLength
  readonly changes: FileChangeLength

  constructor(
    args: Readonly<{
      sha: FileSha
      filename: FileName
      status: FileStatus
      additions: FileAdditionLength
      deletions: FileDeletionLength
      changes: FileChangeLength
    }>
  ) {
    this.sha = args.sha
    this.filename = args.filename
    this.status = args.status
    this.additions = args.additions
    this.deletions = args.deletions
    this.changes = args.changes
  }

  public static fromGithub(githubFile: PullRequestFileGithubType) {
    const { sha, filename, status, additions, deletions, changes } = githubFile

    const fileSha = new FileSha(sha)
    const fileName = new FileName(filename)
    const fileStatus = new FileStatus(status)
    const fileAdditionLength = new FileAdditionLength(additions)
    const fileDeletionLength = new FileDeletionLength(deletions)
    const fileChangeLength = new FileChangeLength(changes)

    return new PullRequestFile({
      sha: fileSha,
      filename: fileName,
      status: fileStatus,
      additions: fileAdditionLength,
      deletions: fileDeletionLength,
      changes: fileChangeLength
    })
  }

  public toJson() {
    const { sha, filename, status, additions, deletions, changes } = this

    const json = {
      sha: sha.sha,
      filename: filename.name,
      status: status.status.toString(),
      additions: additions.length,
      deletions: deletions.length,
      changes: changes.length
    }

    return json
  }
}
