import Owner from '@/utils/repos/owner.js';
import Repo from '@/utils/repos/repo.js';
export default class GithubUrl {
    readonly owner: Owner;
    readonly repo: Repo;
    constructor(args: Readonly<{
        owner: Owner;
        repo: Repo;
    }>);
    static fromString(args: Readonly<{
        owner: string;
        repo: string;
    }>): GithubUrl;
    get url(): string;
}
