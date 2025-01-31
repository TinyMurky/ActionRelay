import CommitUrl from '@/utils/urls/commitUrl.js';
import Owner from '@/utils/repos/githubContextOwner.js';
import Repo from '@/utils/repos/githubContextRepo.js';
import { Context } from '@actions/github/lib/context.js';
export declare class PullRequestCommitUrl extends CommitUrl {
    constructor(args: Readonly<{
        commitId: string;
        owner: Owner;
        repo: Repo;
    }>);
    static fromContext(githubContext: Readonly<Context>): PullRequestCommitUrl;
}
