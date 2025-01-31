import GithubContextOwner from '@/utils/repos/githubContextOwner.js';
import GithubContextRepo from '@/utils/repos/githubContextRepo.js';
import GithubUrl from '@/utils/urls/githubUrl.js';
export default class CommitUrl extends GithubUrl {
    readonly commitId: string;
    constructor(args: Readonly<{
        commitId: string;
        owner: GithubContextOwner;
        repo: GithubContextRepo;
    }>);
    static fromString(args: Readonly<{
        commitId: string;
        owner: string;
        repo: string;
    }>): CommitUrl;
    get url(): string;
}
