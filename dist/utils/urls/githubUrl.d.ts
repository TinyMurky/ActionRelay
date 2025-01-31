import GithubContextOwner from '@/utils/repos/githubContextOwner.js';
import GithubContextRepo from '@/utils/repos/githubContextRepo.js';
export default class GithubUrl {
    readonly owner: GithubContextOwner;
    readonly repo: GithubContextRepo;
    constructor(args: Readonly<{
        owner: GithubContextOwner;
        repo: GithubContextRepo;
    }>);
    static fromString(args: Readonly<{
        owner: string;
        repo: string;
    }>): GithubUrl;
    get url(): string;
}
