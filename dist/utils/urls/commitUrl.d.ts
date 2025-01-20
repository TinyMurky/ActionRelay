import Owner from '@/utils/repos/owner.js';
import Repo from '@/utils/repos/repo.js';
import GithubUrl from '@/utils/urls/githubUrl.js';
export default class CommitUrl extends GithubUrl {
    readonly commitId: string;
    constructor(args: Readonly<{
        commitId: string;
        owner: Owner;
        repo: Repo;
    }>);
    static fromString(args: Readonly<{
        commitId: string;
        owner: string;
        repo: string;
    }>): CommitUrl;
    get url(): string;
}
