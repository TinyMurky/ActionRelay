import { Context } from '@actions/github/lib/context.js';
export default class PullRequestNumber {
    readonly pullNumber: number;
    constructor(pullNumber: Readonly<number>);
    static fromGithubContext(githubContext: Context): PullRequestNumber;
}
