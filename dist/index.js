import { L as Logger, W as WorkflowJob, c as coreExports, C as CoreInput, O as OctokitManager, g as githubContext } from './coreInput-CCBlV6Fl.js';
import { setTimeout } from 'timers/promises';
import 'fs';
import 'os';
import 'crypto';
import 'path';
import 'http';
import 'https';
import 'net';
import 'tls';
import 'events';
import 'assert';
import 'util';
import 'stream';
import 'buffer';
import 'querystring';
import 'stream/web';
import 'node:stream';
import 'node:util';
import 'node:events';
import 'worker_threads';
import 'perf_hooks';
import 'util/types';
import 'async_hooks';
import 'console';
import 'url';
import 'zlib';
import 'string_decoder';
import 'diagnostics_channel';
import 'child_process';
import 'timers';

/**
 * Source: [yogeshlonkar/wait-for-jobs](https://github.com/yogeshlonkar/wait-for-jobs/tree/main)
 * Copyright (c) 2025 yogeshlonkar

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
/**
 * Info: (20250113 - Murky)
 *
 * This class fetch jobs data from [Octokit List jobs for a workflow run](https://octokit.github.io/rest.js/v21/#List-jobs-for-a-workflow-run).
 * Which will Return type of [Github api](https://docs.github.com/en/rest/actions/workflow-jobs?apiVersion=2022-11-28#list-jobs-for-a-workflow-run).
 * Then we export text that can be used in [mermaid-cli](https://github.com/mermaid-js/mermaid-cli),
 * mermaid-cli guild please check [Gantt diagrams](https://mermaid.js.org/syntax/gantt.html)
 */
class ListWorkflowJobsAttempt {
    /**
     * github toolkit to fetch api
     */
    #octokit;
    #githubContext;
    #envConfig;
    constructor(options) {
        const { octokit, githubContext, envConfig } = options;
        this.#octokit = octokit;
        this.#githubContext = githubContext;
        this.#envConfig = envConfig;
    }
    async fetchFromGithub() {
        const attempt_number = this.#envConfig.GITHUB_RUN_ATTEMPT;
        const { runId: run_id, repo: { owner, repo } } = this.#githubContext;
        Logger.debug(`fetching jobs for /repos/${owner}/${repo}/actions/runs/${run_id}/attempts/${attempt_number}/jobs`);
        const jobs = await this.#octokit.paginate(this.#octokit.rest.actions.listJobsForWorkflowRunAttempt, {
            attempt_number,
            owner,
            repo,
            run_id
        });
        const workflowJobs = jobs.map((job) => WorkflowJob.fromGithub(job));
        return workflowJobs;
    }
}

/**
 * Source: [yogeshlonkar/wait-for-jobs](https://github.com/yogeshlonkar/wait-for-jobs/tree/main)
 * Copyright (c) 2025 yogeshlonkar

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
class JobPendingList {
    jobs;
    constructor(args) {
        const { jobs, coreInput } = args;
        const filteredJobs = jobs.filter((job) => !job.name.includes(coreInput.NAME_OF_THIS_JOB));
        // not filter out current job
        if (filteredJobs.length === jobs.length) {
            const errorMessage = 'NAME_OF_THIS_JOB must match exactly to the name of the job that runs Action Relay. The Job Name you set is not found in the GitHub API response.';
            Logger.error(errorMessage);
            coreExports.setFailed(errorMessage);
            throw new Error(errorMessage);
        }
        if (filteredJobs.length <= 0) {
            const errorMessage = 'JobWaitingList need to be initialized at least 1 job, Action Relay Job not included';
            Logger.error(errorMessage);
            throw new Error(errorMessage);
        }
        this.jobs = filteredJobs;
    }
    /**
     * Return string of not completed job separate bt comma
     */
    get pendingJobs() {
        const pendingJobs = this.jobs.filter((job) => !job.isCompleted());
        const pendingJobsName = pendingJobs.map((job) => job.name).join(', ');
        return pendingJobsName;
    }
    isAllJobsSuccess() {
        return this.jobs.every((job) => job.isSuccess());
    }
    isAllJobsCompleted() {
        return this.jobs.every((job) => job.isCompleted());
    }
}

/**
 * Source: [yogeshlonkar/wait-for-jobs](https://github.com/yogeshlonkar/wait-for-jobs/tree/main)
 * Copyright (c) 2025 yogeshlonkar

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
class WaitForJobsToComplete {
    /**
     * Time out waiting progress after timeoutAfterMinute,
     * maximum is 15 minute
     */
    #timeoutAfterMinute;
    /**
     * How long of waiting to check if job complete in millisecond
     */
    #intervalToCheckJobs;
    #taskCtrl = new AbortController();
    #timeoutCtrl = new AbortController();
    #octokit;
    #githubContext;
    #envConfig;
    #coreInput;
    constructor(args) {
        const { coreInput, octokit, githubContext, envConfig } = args;
        this.#coreInput = coreInput;
        this.#timeoutAfterMinute = coreInput.timeoutAfterMinute;
        this.#intervalToCheckJobs = coreInput.intervalToCheckJobs;
        this.#octokit = octokit;
        this.#githubContext = githubContext;
        this.#envConfig = envConfig;
    }
    /**
     * Sleep for given milliseconds
     *
     * @param time in milliseconds to sleep for
     * @param controller to abort timeout
     * @param label for the sleep
     */
    async #sleep(time, controller, label) {
        await setTimeout(time, undefined, { signal: controller.signal });
        if (label) {
            Logger.debug(`${label} done`);
        }
    }
    /**
     * Timeout execution after {@link this.#timeoutAfterMinute}
     */
    async #timeout() {
        await this.#sleep(this.#timeoutAfterMinute * 60 * 1000, this.#timeoutCtrl, 'action-timeout');
        throw new Error(`error: jobs did not complete in ${this.#timeoutAfterMinute} minutes`);
    }
    /**
     * clean up setTimeout after resolve of {@link Promise.race}
     */
    #cleanup = () => {
        this.#taskCtrl.abort();
        this.#timeoutCtrl.abort();
        coreExports.endGroup();
    };
    /**
     * handle rejection from {@link Promise.race}
     *
     * @param reason The rejection reason
     */
    #onRejected = (reason) => {
        this.#cleanup();
        if (reason instanceof Error) {
            coreExports.setFailed(reason.message);
        }
        else {
            coreExports.setFailed(`${reason}`);
        }
    };
    async #wait() {
        coreExports.startGroup(`Starting Loop to check if Job is Completed, but not checking if job is success`);
        let fetchAttemptTime = 0;
        while (true) {
            fetchAttemptTime += 1;
            Logger.debug(`The ${fetchAttemptTime} time checking if job complete`);
            const listJobsForWorkflowRunAttempt = new ListWorkflowJobsAttempt({
                octokit: this.#octokit,
                githubContext: this.#githubContext,
                envConfig: this.#envConfig
            });
            const jobs = await listJobsForWorkflowRunAttempt.fetchFromGithub();
            const jobPendingList = new JobPendingList({
                jobs,
                coreInput: this.#coreInput
            });
            if (jobPendingList.isAllJobsCompleted()) {
                break;
            }
            Logger.info(`waiting for jobs ${jobPendingList.pendingJobs}`);
            await this.#sleep(this.#intervalToCheckJobs, this.#taskCtrl, 'wait-for-jobs');
        }
        coreExports.endGroup();
    }
    async start() {
        await Promise.race([this.#timeout(), this.#wait()]).then(this.#cleanup, this.#onRejected);
        Logger.info('All Previous Jobs are completed!');
    }
}

/**
 * Info: (20250115 - Murky)
 * This can read env and change into class
 * might be delete later
 */
class EnvConfig {
    GITHUB_RUN_ATTEMPT;
    constructor(env) {
        const { GITHUB_RUN_ATTEMPT: githubRunAttempt } = env;
        if (!githubRunAttempt) {
            const errorMessage = 'GITHUB_TOKEN is not generated by GITHUB Action or not provided';
            Logger.error(errorMessage);
            coreExports.setFailed(errorMessage);
            throw new Error(errorMessage);
        }
        // Info: (20250114 - Murky) We can use ! because `core.setFailed` will end progress
        this.GITHUB_RUN_ATTEMPT = parseInt(githubRunAttempt, 10);
    }
}
new EnvConfig(process.env);

/**
 * The main function for the action.
 *
 * The main function for the action.
 */
async function run() {
    try {
        const coreInput = CoreInput.getInstance();
        const envConfig = new EnvConfig(process.env);
        const octokit = OctokitManager.getInstance(coreInput.githubToken);
        // Set outputs for other workflow steps to use
        const waitForJobsToComplete = new WaitForJobsToComplete({
            githubContext,
            octokit,
            coreInput,
            envConfig
        });
        await waitForJobsToComplete.start();
        coreExports.setOutput('time', new Date().toTimeString());
    }
    catch (error) {
        // Fail the workflow run if an error occurs
        if (error instanceof Error)
            coreExports.setFailed(error.message);
    }
}

/**
 * The entrypoint for the action. This file simply imports and runs the action's
 * main logic.
 */
/* istanbul ignore next */
run();
//# sourceMappingURL=index.js.map
