import { PullRequestFileStatusType } from '@/types/file.js';
export default class FileStatus {
    #private;
    readonly status: PullRequestFileStatusType;
    constructor(status: Readonly<unknown>);
}
