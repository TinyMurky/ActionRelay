import { GitHubInstance } from '@/types/github.js';
import PullRequest from '@/utils/pullRequests/pullRequest.js';
import { Context } from '@actions/github/lib/context.js';
export default class GetPullRequest {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        githubContext: Context;
    });
    fetchFromGithub(): Promise<PullRequest>;
}
