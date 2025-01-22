/**
 * Source: [catchpoint/workflow-telemetry-action](https://github.com/catchpoint/workflow-telemetry-action/tree/master)
 * Copyright (c) 2025 Catchpoint Systems

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { GitHubInstance } from '@/types/github.js';
import { Context } from '@actions/github/lib/context.js';
import WorkflowJob from '@/utils/jobs/workflowJob.js';
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
