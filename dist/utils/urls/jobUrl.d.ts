import Owner from '@/utils/repos/owner.js';
import Repo from '@/utils/repos/repo.js';
import GithubUrl from '@/utils/urls/githubUrl.js';
export default class JobUrl extends GithubUrl {
    readonly jobId: number;
    constructor(args: Readonly<{
        jobId: number;
        owner: Owner;
        repo: Repo;
    }>);
    static fromString(args: Readonly<{
        jobId: number;
        owner: string;
        repo: string;
    }>): JobUrl;
    get url(): string;
}
