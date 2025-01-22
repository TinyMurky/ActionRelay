import { W as WorkflowJob, G as GanttChartTaskTag, g as githubContext, L as Logger, C as CoreInput, O as OctokitManager, c as coreExports } from './coreInput-H5PK0cVn.js';
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
 * Info: (20250113 - Murky)
 *
 * This class fetch jobs data from [Octokit List jobs for a workflow run](https://octokit.github.io/rest.js/v21/#List-jobs-for-a-workflow-run).
 * Which will Return type of [Github api](https://docs.github.com/en/rest/actions/workflow-jobs?apiVersion=2022-11-28#list-jobs-for-a-workflow-run).
 * Then we export text that can be used in [mermaid-cli](https://github.com/mermaid-js/mermaid-cli),
 * mermaid-cli guild please check [Gantt diagrams](https://mermaid.js.org/syntax/gantt.html)
 */
class ListWorkflowJobs {
    /**
     * Info: (20250113 - Murky)
     * Maximum jobs GITHUB allow to fetch per page
     */
    static #MAX_PAGE_SIZE = 100;
    /**
     * Info: (20250114 - Murky)
     * github toolkit to fetch api
     */
    #octokit;
    #githubContext;
    constructor(options) {
        const { octokit, githubContext } = options;
        this.#octokit = octokit;
        this.#githubContext = githubContext;
    }
    async fetchFromGithub() {
        const { repo, runId } = this.#githubContext;
        const page = 0;
        const workflowJobs = [];
        while (true) {
            const result = await this.#octokit.rest.actions.listJobsForWorkflowRun({
                owner: repo.owner,
                repo: repo.repo,
                run_id: runId,
                page,
                per_page: ListWorkflowJobs.#MAX_PAGE_SIZE
            });
            const jobs = result.data.jobs;
            if (!jobs || jobs.length <= 0) {
                break;
            }
            for (const job of jobs) {
                const workflowJob = WorkflowJob.fromGithub(job);
                workflowJobs.push(workflowJob);
            }
            /**
             * Info: (20250114 - Murky)
             * If jobs length less than max page, we are in last page, no need to fetch again
             */
            if (jobs.length <= ListWorkflowJobs.#MAX_PAGE_SIZE) {
                break;
            }
        }
        return workflowJobs;
    }
}

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
/**
 * Info: (20250117 - Murky)
 * active is light blue
 * done is gray
 * crit is red
 * milestone is diamond shape
 */
class GanttTaskTag {
    static #tagToStringMap = {
        [GanttChartTaskTag.active]: 'active,',
        [GanttChartTaskTag.done]: 'done,',
        [GanttChartTaskTag.crit]: 'crit,',
        [GanttChartTaskTag.milestone]: 'milestone,',
        [GanttChartTaskTag.empty]: ''
    };
    tag;
    constructor(tag) {
        this.#assertIsGanttChartTaskTab(tag);
        this.tag = tag;
    }
    static fromString(tag) {
        return new GanttTaskTag(tag);
    }
    static active() {
        return new GanttTaskTag(GanttChartTaskTag.active);
    }
    static done() {
        return new GanttTaskTag(GanttChartTaskTag.done);
    }
    static crit() {
        return new GanttTaskTag(GanttChartTaskTag.crit);
    }
    static milestone() {
        return new GanttTaskTag(GanttChartTaskTag.milestone);
    }
    static empty() {
        return new GanttTaskTag(GanttChartTaskTag.empty);
    }
    toString() {
        return GanttTaskTag.#tagToStringMap[this.tag];
    }
    /**
     * Convert unknown to GanttChartTaskTab
     * Throw Error if not in enum
     */
    #assertIsGanttChartTaskTab(tag) {
        if (!Object.values(GanttChartTaskTag).includes(tag)) {
            throw new Error(`Status is not GanttChartTaskTag, input tag: ${tag}`);
        }
    }
}

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
var _a;
class GanttTask {
    static #MILESTONE_KEYWORDS = ['Set up job', 'Complete job'];
    name;
    /**
     * Info: (20250116 - Murky)
     * Tag is defined by [Mermaid Gnatt Syntax](https://mermaid.js.org/syntax/gantt.html),
     * One task can have multiple tag
     * @example
     * Set up job : milestone, active, 1658073446000, 1658073450000
     */
    tags;
    startedAt;
    completedAt;
    constructor(args) {
        const { name, tags, startedAt, completedAt } = args;
        if (!name) {
            throw new Error('GanttTask must provide name that length is larger than 0');
        }
        this.name = name;
        this.tags = tags ? tags : [];
        // Info: (20250116 - Murky) all param in startedAt is readonly,
        // so it is safe to not init new one
        this.startedAt = startedAt;
        // Info: (20250116 - Murky) all param in completedAt is readonly,
        // so it is safe to not init new one
        this.completedAt = completedAt;
        this.#addMilestoneTagIfApplicable();
    }
    pushTag(tag) {
        const copyTag = new GanttTaskTag(tag.tag);
        this.tags.push(copyTag);
    }
    addActiveTag() {
        return this.pushTag(GanttTaskTag.active());
    }
    addDoneTag() {
        return this.pushTag(GanttTaskTag.done());
    }
    addCritTag() {
        return this.pushTag(GanttTaskTag.crit());
    }
    addMilestoneTag() {
        return this.pushTag(GanttTaskTag.milestone());
    }
    addEmptyTag() {
        return this.pushTag(GanttTaskTag.empty());
    }
    toString() {
        const tagsSyntax = Array.from(new Set(this.tags.map((tag) => tag.toString()))).join(' ');
        const startedAtTimestamp = Math.min(this.startedAt.timestamp, this.completedAt.timestamp);
        const ganttTaskSyntax = '    ' +
            this.name +
            ' :' +
            tagsSyntax +
            ' ' +
            startedAtTimestamp +
            ', ' +
            this.completedAt.timestamp;
        return ganttTaskSyntax;
    }
    #addMilestoneTagIfApplicable() {
        if (this.#isMilestoneTask() && !this.#isMilestoneTagExist()) {
            this.addMilestoneTag();
        }
    }
    #isMilestoneTask() {
        return _a.#MILESTONE_KEYWORDS.some((keyword) => this.name.includes(keyword));
    }
    #isMilestoneTagExist() {
        return this.tags.some((tag) => tag.tag === GanttChartTaskTag.milestone);
    }
}
_a = GanttTask;

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
/**
 * Info: (20250117 - Murky)
 *
 * In [Mermaid Gantt Syntax](https://mermaid.js.org/syntax/gantt.html)
 * One Section have multiple task
 * and one task can have multiple tag
 *
 * @example
 * section Critical tasks
 * Set up job                          :milestone, 1658073446000, 1658073450000
 * Completed task in the critical line :crit, done, 1658073451000, 1658073453000
 * Implement parser and json           :done, 1658073453000after, 1658073458000
 * Create tests for parser             :1658073459000, 1658073654000
 */
class GanttSection {
    name;
    tasks;
    constructor(args) {
        const { name, tasks } = args;
        if (!name) {
            throw new Error('GanttSection must provide name that length is larger than 0');
        }
        this.name = name;
        if (tasks && tasks.length > 0) {
            this.tasks = tasks;
        }
        else {
            this.tasks = [];
        }
    }
    /**
     * Add a pre-existing GanttTask instance to the section.
     */
    pushTask(task) {
        const newTask = new GanttTask({
            name: task.name,
            startedAt: task.startedAt,
            completedAt: task.completedAt,
            tags: task.tags
        });
        this.tasks.push(newTask);
    }
    /**
     * Create and add a new task directly to the section.
     */
    addTask(args) {
        const task = new GanttTask(args);
        this.tasks.push(task);
    }
    toString() {
        const sectionTitleSyntax = '    section ' + this.name + '\n';
        const tagsSyntax = this.tasks.map((task) => task.toString()).join('\n');
        const sectionSyntax = sectionTitleSyntax + tagsSyntax;
        return sectionSyntax;
    }
}

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
class GanttChart {
    static #DATE_FORMAT = 'x'; // Info: (20250117 - Murky) Timestamp
    static #AXIS_FORMAT = '%H:%M:%S';
    title;
    sections;
    constructor(args) {
        const { title, sections } = args;
        if (!title) {
            throw new Error("GanttChart's title need to be larger than 0");
        }
        this.title = title;
        this.sections = sections ? sections : [];
    }
    /**
     * Create and add a new task directly to the section.
     */
    pushSection(section) {
        this.sections.push(section);
    }
    /**
     * Create and add a new section directly to the chart.
     */
    addSection(args) {
        const newSection = new GanttSection(args);
        this.sections.push(newSection);
    }
    /**
     * Add a pre-existing GanttTask instance to the last section in ganttChart.
     */
    pushTaskToLastSection(task) {
        if (!this.sections.length) {
            throw new Error('When push task to last section of ganttChart, it must has at least one section in chart');
        }
        const lastSection = this.sections[this.sections.length - 1];
        lastSection.pushTask(task);
    }
    /**
     * Create and add a new task directly to the last section in ganttChart.
     */
    addTaskToLastSection(args) {
        if (!this.sections.length) {
            throw new Error('When add task to last section of ganttChart, it must has at least one section in chart');
        }
        const lastSection = this.sections[this.sections.length - 1];
        lastSection.addTask(args);
    }
    toMermaidSyntax() {
        const upperMdx = '```mermaid\n';
        const bottomMdx = '```';
        const title = '    title ' + this.title + '\n';
        const dateFormat = '    dateFormat ' + GanttChart.#DATE_FORMAT + '\n';
        const axisFormat = '    axisFormat ' + GanttChart.#AXIS_FORMAT + '\n';
        const sectionSyntax = this.sections
            .map((section) => section.toString())
            .join('\n\n'); // need extra \n to make empty line
        const ganttSyntax = upperMdx +
            'gantt\n' +
            title +
            dateFormat +
            axisFormat +
            sectionSyntax +
            bottomMdx;
        return ganttSyntax;
    }
}

/**
 * Store owner of repo (or issue) from github context
 */
class Owner {
    name;
    constructor(args) {
        const { name } = args;
        if (!name) {
            throw new Error('Owner should be initialized by name at least 1 character');
        }
        this.name = name;
    }
}

/**
 * Store name of repo (or issue) from github context
 */
class Repo {
    name;
    constructor(args) {
        const { name } = args;
        if (!name) {
            throw new Error('Repo should be initialized by name at least 1 character');
        }
        this.name = name;
    }
}

class GithubUrl {
    owner;
    repo;
    constructor(args) {
        const { owner, repo } = args;
        this.owner = owner;
        this.repo = repo;
    }
    static fromString(args) {
        const { owner, repo } = args;
        const newOwner = new Owner({
            name: owner
        });
        const newRepo = new Repo({
            name: repo
        });
        return new GithubUrl({
            owner: newOwner,
            repo: newRepo
        });
    }
    get url() {
        const url = `https://github.com/${this.owner.name}/${this.repo.name}`;
        return url;
    }
}

class JobUrl extends GithubUrl {
    jobId;
    constructor(args) {
        const { jobId, owner, repo } = args;
        if (jobId <= 0) {
            throw new Error('JobUrl initialized need to provide jobId that at least 1');
        }
        super({
            owner,
            repo
        });
        this.jobId = jobId;
    }
    static fromString(args) {
        const { jobId, owner, repo } = args;
        const newOwner = new Owner({
            name: owner
        });
        const newRepo = new Repo({
            name: repo
        });
        return new JobUrl({
            jobId,
            owner: newOwner,
            repo: newRepo
        });
    }
    get url() {
        const githubUrl = super.url;
        const url = `${githubUrl}/runs/${this.jobId}?check_suite_focus=true`;
        return url;
    }
}

class CommitUrl extends GithubUrl {
    commitId;
    constructor(args) {
        const { commitId, owner, repo } = args;
        if (!commitId) {
            throw new Error('CommitUrl initialized need to provide commitId that at least 1 character');
        }
        super({
            owner,
            repo
        });
        this.commitId = commitId;
    }
    static fromString(args) {
        const { commitId, owner, repo } = args;
        const newOwner = new Owner({
            name: owner
        });
        const newRepo = new Repo({
            name: repo
        });
        return new CommitUrl({
            commitId,
            owner: newOwner,
            repo: newRepo
        });
    }
    get url() {
        const githubUrl = super.url;
        const url = `${githubUrl}/commit/${this.commitId}`;
        return url;
    }
}

class PullRequestCommitUrl extends CommitUrl {
    constructor(args) {
        const { commitId } = args;
        if (!commitId) {
            throw new Error('PullRequestCommitUrl initialized need to provide commitId that at least 1 character');
        }
        super(args);
    }
    static fromContext(githubContext) {
        const { repo, sha } = githubContext;
        const { pull_request } = githubContext.payload;
        const commitId = (pull_request && pull_request.head && pull_request.head.sha) || sha;
        const newOwner = new Owner({
            name: repo.owner
        });
        const newRepo = new Repo({
            name: repo.repo
        });
        return new PullRequestCommitUrl({
            commitId,
            owner: newOwner,
            repo: newRepo
        });
    }
}

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
class JobGanttChartDrawer {
    #jobs;
    #githubContext;
    constructor(args) {
        const { jobs, githubContext } = args;
        if (!jobs || jobs.length <= 0) {
            throw new Error('To draw Gantt by using JobGanttChartDrawer, At least one job need to be provided.');
        }
        this.#jobs = jobs;
        this.#githubContext = githubContext;
    }
    async generateGanttChartParagraph() {
        const filteredJobs = this.#filterJobWithValidStep();
        const title = this.#generateTitle();
        const ganttChart = new GanttChart({ title });
        this.#populateGanttChartWithJobs({
            ganttChart,
            jobs: filteredJobs
        });
        const markdown = ganttChart.toMermaidSyntax();
        const summarySyntax = this.#generateSummaryText();
        return summarySyntax + markdown;
    }
    /**
     * Info: (20250117 - Murky)
     * Return jobs that all steps in jobs has startAt and completedAt
     */
    #filterJobWithValidStep() {
        const filteredJobs = this.#jobs.map((job) => job.filterStepWithBothStartAtAndCompleteAt());
        return filteredJobs;
    }
    #generateTitle() {
        const { repo, runId, actor } = this.#githubContext;
        const title = `Repo: ${repo.repo} - RunId: ${runId} - Actor: ${actor}`;
        return title;
    }
    /**
     * Filled GanttChart By jobs as section and steps as task
     */
    #populateGanttChartWithJobs(args) {
        const { ganttChart, jobs } = args;
        for (const job of jobs) {
            ganttChart.addSection({ name: job.name });
            for (const step of job.steps) {
                const ganttTaskTag = new GanttTaskTag(step.ganttTag);
                if (!step.startedAt || !step.completedAt) {
                    throw new Error('All step pass to ganttChart must have startedAt and completeAt');
                }
                ganttChart.addTaskToLastSection({
                    name: step.name,
                    startedAt: step.startedAt,
                    completedAt: step.completedAt,
                    tags: [ganttTaskTag]
                });
            }
        }
    }
    #generateSummaryText() {
        const title = this.#generateHeader();
        const commitMessage = this.#generateCommitMessage();
        const jobDetails = this.#generateJobDetails();
        return title + commitMessage + jobDetails;
    }
    #generateHeader() {
        return '# ActionRelay - Jobs and Steps Gantt Chart\n';
    }
    #generateCommitMessage() {
        const pullRequestCommitUrl = PullRequestCommitUrl.fromContext(this.#githubContext);
        return `Base on commit: [${pullRequestCommitUrl.commitId}](${pullRequestCommitUrl.url})\n\n`;
    }
    #generateJobDetails() {
        const { owner, repo } = githubContext.repo;
        const jobUrls = this.#jobs.map((job) => ({
            jobUrl: JobUrl.fromString({ jobId: job.id, owner, repo }),
            jobName: job.name
        }));
        const jobSummary = 'Jobs details below:\n';
        const jobMessages = jobUrls
            .map((jobUrl) => `- Job **${jobUrl.jobName}** details [here](${jobUrl.jobUrl.url})\n`)
            .join('');
        return jobSummary + jobMessages;
    }
}

class PullRequestCommitter {
    octokit;
    owner;
    repo;
    pullRequestId;
    constructor(args) {
        const { octokit, context } = args;
        if (!context.payload.pull_request) {
            throw new Error('Context does not contain a pull request');
        }
        this.octokit = octokit;
        this.owner = new Owner({ name: context.repo.owner });
        this.repo = new Repo({ name: context.repo.repo });
        this.pullRequestId = context.payload.pull_request.number;
    }
    async postComment(body) {
        await this.octokit.rest.issues.createComment({
            owner: this.owner.name,
            repo: this.repo.name,
            issue_number: this.pullRequestId,
            body
        });
    }
}

class IssueCommitter {
    octokit;
    owner;
    repo;
    issueNumber;
    constructor(args) {
        const { octokit, context } = args;
        this.octokit = octokit;
        this.owner = new Owner({ name: context.repo.owner });
        this.repo = new Repo({ name: context.repo.repo });
        this.issueNumber = context.issue.number;
    }
    async postComment(body) {
        await this.octokit.rest.issues.createComment({
            owner: this.owner.name,
            repo: this.repo.name,
            issue_number: this.issueNumber,
            body
        });
    }
}

class GithubCommitter {
    pullRequestCommitter;
    issueCommitter;
    constructor(args) {
        const { octokit, githubContext } = args;
        this.issueCommitter = new IssueCommitter({
            octokit,
            context: githubContext
        });
        if (githubContext.payload.pull_request) {
            this.pullRequestCommitter = new PullRequestCommitter({
                octokit,
                context: githubContext
            });
        }
    }
    async createComment(args) {
        const { body, postToPullRequest } = args;
        if (!body) {
            throw new Error('Body must have at least 1 character when creating a comment');
        }
        if (postToPullRequest) {
            if (!this.pullRequestCommitter) {
                throw new Error('Pull request handler is not available in this context');
            }
            return this.pullRequestCommitter.postComment(body);
        }
        else {
            return this.issueCommitter.postComment(body);
        }
    }
}

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
/**
 * This class is designed to run the main process of generating Gantt charts
 * from GitHub jobs.
 * It is intended to be used exclusively in the main function.
 */
class MainJobsToGanttRunner {
    #octokit;
    #githubContext;
    constructor(args) {
        this.#octokit = args.octokit;
        this.#githubContext = args.githubContext;
    }
    #isPullRequest() {
        return !!this.#githubContext.payload.pull_request;
    }
    async #fetchWorkflowJobs() {
        const listWorkflowJobs = new ListWorkflowJobs({
            octokit: this.#octokit,
            githubContext: this.#githubContext
        });
        const workflowJobs = await listWorkflowJobs.fetchFromGithub();
        Logger.debug(`WorkflowJobs fetch successfully, job length: ${workflowJobs.length}`);
        Logger.debug(`WorkflowJobs: ${JSON.stringify(workflowJobs, null, 2)}`);
        return workflowJobs;
    }
    async #generateGanttChartParagraph(jobs) {
        const jobGanttChartDrawer = new JobGanttChartDrawer({
            jobs,
            githubContext: this.#githubContext
        });
        const ganttChartParagraph = await jobGanttChartDrawer.generateGanttChartParagraph();
        Logger.debug('Gantt Chart create successfully');
        return ganttChartParagraph;
    }
    async #createCommit(args) {
        const { ganttChartParagraph } = args;
        const githubCommitter = new GithubCommitter({
            octokit: this.#octokit,
            githubContext: this.#githubContext
        });
        return githubCommitter.createComment({
            body: ganttChartParagraph,
            postToPullRequest: true
        });
    }
    async run() {
        if (this.#isPullRequest()) {
            const workflowJobs = await this.#fetchWorkflowJobs();
            const ganttChartParagraph = await this.#generateGanttChartParagraph(workflowJobs);
            await this.#createCommit({
                ganttChartParagraph
            });
            Logger.info('[Step]: Gantt Chart Generate completed');
        }
        else {
            Logger.info('[Step]: Gantt Chart Generate skipped since the commit is not pull request');
        }
    }
}

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
/**
 * The main function for the action.
 *
 * The main function for the action.
 */
async function run() {
    try {
        // const ms: string = core.getInput('milliseconds')
        // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
        Logger.debug(`Github Context: ${githubContext}`);
        // Log the current timestamp, wait, then log the new timestamp
        Logger.debug(new Date().toTimeString());
        const coreInput = CoreInput.getInstance();
        const octokit = OctokitManager.getInstance(coreInput.githubToken);
        const stepGanttChartGenerate = new MainJobsToGanttRunner({
            octokit,
            githubContext
        });
        // Info: (20250122 - Murky) Delay to that ActionRelay completed
        await setTimeout(5000);
        await stepGanttChartGenerate.run();
        // Set outputs for other workflow steps to use
        coreExports.setOutput('time', new Date().toTimeString());
    }
    catch (error) {
        // Fail the workflow run if an error occurs
        if (error instanceof Error)
            coreExports.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=post.js.map
