import { GitHubInstance } from '@/types/github.js';
import PullRequestFile from '@/utils/files/pullRequestFile.js';
import { Context } from '@actions/github/lib/context.js';
export default class ListPrFileChange {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        githubContext: Context;
    });
    fetchFromGithub(): Promise<PullRequestFile[]>;
}
