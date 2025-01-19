import { GitHubInstance } from '@/types/github.js';
import { Context } from '@actions/github/lib/context.js';
/**
 * This class is designed to run the main process of generating Gantt charts
 * from GitHub jobs.
 * It is intended to be used exclusively in the main function.
 */
export default class MainJobsToGanttRunner {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        githubContext: Context;
    });
    run(): Promise<void>;
}
