import GithubContextOwner from '@/utils/repos/githubContextOwner.js';
import GithubContextRepo from '@/utils/repos/githubContextRepo.js';
import GithubUrl from '@/utils/urls/githubUrl.js';
export default class JobUrl extends GithubUrl {
    readonly jobId: number;
    constructor(args: Readonly<{
        jobId: number;
        owner: GithubContextOwner;
        repo: GithubContextRepo;
    }>);
    static fromString(args: Readonly<{
        jobId: number;
        owner: string;
        repo: string;
    }>): JobUrl;
    get url(): string;
}
