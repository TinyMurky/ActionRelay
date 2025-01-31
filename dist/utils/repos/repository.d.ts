import { RepositoryGithubType } from '@/types/repository.js';
import RepoFullName from '@/utils/repos/repoFullName.js';
import RepoName from '@/utils/repos/repoName.js';
export default class Repository {
    readonly id: number;
    readonly name: RepoName;
    readonly fullName: RepoFullName;
    constructor(args: Readonly<{
        id: number;
        name: RepoName;
        fullName: RepoFullName;
    }>);
    static fromGithub(githubRepository: RepositoryGithubType): Repository;
    toJson(): {
        id: number;
        name: string;
        fullName: string;
    };
}
