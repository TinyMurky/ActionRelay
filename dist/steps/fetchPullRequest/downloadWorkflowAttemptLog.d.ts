import { GitHubInstance } from '@/types/github.js';
import { Context } from '@actions/github/lib/context.js';
import * as httpm from '@actions/http-client';
import { EnvConfig } from '@/utils/envConfig.js';
/**
 * This step is download workflows log (which have all jobs log store in zip)
 */
export default class DownloadWorkflowAttemptLog {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        githubContext: Context;
        envConfig: EnvConfig;
        httpClient: httpm.HttpClient;
    });
    downloadAndReturnZipBuffer(): Promise<{
        saveUrl: string;
        logZipBuffer: Buffer<ArrayBufferLike>;
    }>;
}
