import CommitSha from '@/utils/commits/commitSha.js';
import CommitMessage from '@/utils/commits/commitMessage.js';
import { CommitGithubType } from '@/types/commit.js';
export default class Commit {
    readonly sha: CommitSha;
    readonly message: CommitMessage;
    constructor(args: Readonly<{
        sha: CommitSha;
        message: CommitMessage;
    }>);
    static fromGithub(githubCommit: Readonly<CommitGithubType>): Commit;
    toJson(): {
        sha: string;
        message: string;
    };
}
