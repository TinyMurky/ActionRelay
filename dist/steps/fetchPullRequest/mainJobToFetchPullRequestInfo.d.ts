import { GitHubInstance } from '@/types/github.js';
import { Context } from '@actions/github/lib/context.js';
export default class MainJobToFetchPullRequestInfo {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        githubContext: Context;
    });
    run(): Promise<void>;
}
