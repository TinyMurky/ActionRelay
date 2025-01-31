import { PullRequestStatusType } from '@/types/pullRequest.js';
export default class PullRequestStatus {
    #private;
    readonly status: PullRequestStatusType;
    constructor(status: Readonly<unknown>);
}
