import { GitHubInstance } from '@/types/github.js';
import { Context } from '@actions/github/lib/context.js';
export default class GithubCommitter {
    private readonly pullRequestCommitter?;
    private readonly issueCommitter;
    constructor(args: Readonly<{
        octokit: GitHubInstance;
        githubContext: Context;
    }>);
    createComment(args: Readonly<{
        body: string;
        postToPullRequest: boolean;
    }>): Promise<void>;
}
