import { GitHubInstance } from '@/types/github.js';
import { Context } from '@actions/github/lib/context.js';
import { WorkflowJob } from '@/steps/jobSummary/workflowJob.js';
/**
 * Info: (20250113 - Murky)
 *
 * This class fetch jobs data from [Octokit List jobs for a workflow run](https://octokit.github.io/rest.js/v21/#List-jobs-for-a-workflow-run).
 * Which will Return type of [Github api](https://docs.github.com/en/rest/actions/workflow-jobs?apiVersion=2022-11-28#list-jobs-for-a-workflow-run).
 * Then we export text that can be used in [mermaid-cli](https://github.com/mermaid-js/mermaid-cli),
 * mermaid-cli guild please check [Gantt diagrams](https://mermaid.js.org/syntax/gantt.html)
 */
export default class ListWorkflowJobs {
    #private;
    constructor(options: Readonly<{
        octokit: GitHubInstance;
        githubContext: Context;
    }>);
    fetchFromGithub(): Promise<WorkflowJob[]>;
}
