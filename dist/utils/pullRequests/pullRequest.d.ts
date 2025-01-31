import PullRequestStatus from '@/utils/pullRequests/pullRequestStatus.js';
import CreateTime from '@/utils/times/createTime.js';
import UpdateTime from '@/utils/times/updateTime.js';
import MergeTime from '@/utils/times/mergeTime.js';
import CloseTime from '@/utils/times/closeTime.js';
import PullRequestBody from '@/utils/pullRequests/pullRequestBody.js';
import { PullRequestGithubType } from '@/types/pullRequest.js';
import PullRequestSha from '@/utils/pullRequests/pullRequestSha.js';
import PullRequestUser from '@/utils/users/pullRequestUser.js';
export default class PullRequest {
    readonly id: number;
    readonly sha: PullRequestSha;
    readonly body: PullRequestBody;
    readonly state: PullRequestStatus;
    readonly user: PullRequestUser;
    readonly createdAt: CreateTime;
    readonly updatedAt: UpdateTime;
    readonly mergedAt: MergeTime | null;
    readonly closedAt: CloseTime | null;
    constructor(args: Readonly<{
        id: number;
        sha: PullRequestSha;
        body: PullRequestBody;
        state: PullRequestStatus;
        user: PullRequestUser;
        createdAt: CreateTime;
        updatedAt: UpdateTime;
        mergedAt: MergeTime | null;
        closedAt: CloseTime | null;
    }>);
    static fromGithub(args: Readonly<{
        githubPullRequest: PullRequestGithubType;
        sha: PullRequestSha | string;
    }>): PullRequest;
    toJson(): {
        id: number;
        sha: string;
        body: string;
        state: string;
        user: {
            id: number;
            avatarUrl: string;
            name: string | null;
            email: string | null;
        };
        createdAt: number;
        updatedAt: number;
        mergedAt: number | null;
        closedAt: number | null;
    };
}
