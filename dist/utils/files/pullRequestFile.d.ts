import { PullRequestFileGithubType } from '@/types/file.js';
import FileAdditionLength from '@/utils/files/fileAdditionLength.js';
import FileChangeLength from '@/utils/files/fileChangeLength.js';
import FileDeletionLength from '@/utils/files/fileDeletionLength.js';
import FileName from '@/utils/files/fileName.js';
import FileSha from '@/utils/files/fileSha.js';
import FileStatus from '@/utils/files/fileStatus.js';
export default class PullRequestFile {
    readonly sha: FileSha;
    readonly filename: FileName;
    readonly status: FileStatus;
    readonly additions: FileAdditionLength;
    readonly deletions: FileDeletionLength;
    readonly changes: FileChangeLength;
    constructor(args: Readonly<{
        sha: FileSha;
        filename: FileName;
        status: FileStatus;
        additions: FileAdditionLength;
        deletions: FileDeletionLength;
        changes: FileChangeLength;
    }>);
    static fromGithub(githubFile: PullRequestFileGithubType): PullRequestFile;
    toJson(): {
        sha: string;
        filename: string;
        status: string;
        additions: number;
        deletions: number;
        changes: number;
    };
}
