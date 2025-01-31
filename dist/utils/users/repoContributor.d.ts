import UserEmail from '@/utils/users/userEmail.js';
import UserName from '@/utils/users/userName.js';
import UserAvatarUrl from '@/utils/users/userAvatarUrl.js';
import { ContributorGithubType } from '@/types/user.js';
export default class RepoContributor {
    readonly id: number;
    readonly avatarUrl: UserAvatarUrl | null;
    readonly name: UserName | null;
    readonly email: UserEmail | null;
    constructor(args: Readonly<{
        id?: number;
        avatarUrl: UserAvatarUrl | null;
        name: UserName | null;
        email: UserEmail | null;
    }>);
    static fromGithub(user: ContributorGithubType): RepoContributor;
}
