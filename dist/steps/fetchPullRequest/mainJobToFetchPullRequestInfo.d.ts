import { GitHubInstance } from '@/types/github.js';
import { Context } from '@actions/github/lib/context.js';
import * as httpm from '@actions/http-client';
import CoreInput from '@/utils/coreInput.js';
export default class MainJobToFetchPullRequestInfo {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        githubContext: Context;
        httpClient: httpm.HttpClient;
        coreInput: CoreInput;
    });
    run(): Promise<void>;
}
