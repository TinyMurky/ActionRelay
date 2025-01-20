import { GitHubInstance } from '@/types/github.js';
import { Context } from '@actions/github/lib/context.js';
export default class IssueCommitter {
    private readonly octokit;
    private readonly owner;
    private readonly repo;
    private readonly issueNumber;
    constructor(args: Readonly<{
        octokit: GitHubInstance;
        context: Context;
    }>);
    postComment(body: Readonly<string>): Promise<void>;
}
