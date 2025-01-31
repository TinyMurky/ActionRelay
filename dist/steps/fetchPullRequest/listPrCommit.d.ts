import { GitHubInstance } from '@/types/github.js';
import Commit from '@/utils/commits/commit.js';
import { Context } from '@actions/github/lib/context.js';
export default class ListPrCommit {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        githubContext: Context;
    });
    fetchFromGithub(): Promise<Commit[]>;
}
