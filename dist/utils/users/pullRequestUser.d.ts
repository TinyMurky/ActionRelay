import UserEmail from '@/utils/users/userEmail.js';
import UserName from '@/utils/users/userName.js';
import UserAvatarUrl from '@/utils/users/userAvatarUrl.js';
import { PullRequestGithubType } from '@/types/pullRequest.js';
/**
 * Init by github get user by id [api](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user-using-their-id)
 */
export default class PullRequestUser {
    readonly id: number;
    readonly avatarUrl: UserAvatarUrl;
    readonly name: UserName | null;
    readonly email: UserEmail | null;
    constructor(args: Readonly<{
        id: number;
        avatarUrl: UserAvatarUrl;
        name: UserName | null;
        email: UserEmail | null;
    }>);
    static fromGithub(user: PullRequestGithubType['user']): PullRequestUser;
    toJson(): {
        id: number;
        avatarUrl: string;
        name: string | null;
        email: string | null;
    };
}
