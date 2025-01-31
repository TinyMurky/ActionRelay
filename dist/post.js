import { W as WorkflowJob, G as GanttChartTaskTag, g as githubContext, L as Logger, D as DateTime, a as CreateTime, C as CoreInput, O as OctokitManager, c as coreExports } from './coreInput-CCBlV6Fl.js';
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
var _a$1;
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
        return _a$1.#MILESTONE_KEYWORDS.some((keyword) => this.name.includes(keyword));
    }
    #isMilestoneTagExist() {
        return this.tags.some((tag) => tag.tag === GanttChartTaskTag.milestone);
    }
}
_a$1 = GanttTask;

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
class GithubContextOwner {
    name;
    constructor(args) {
        const { name } = args;
        if (!name) {
            throw new Error('GithubContextOwner should be initialized by name at least 1 character');
        }
        this.name = name;
    }
}

/**
 * Store name of repo (or issue) from github context
 */
class GithubContextRepo {
    name;
    constructor(args) {
        const { name } = args;
        if (!name) {
            throw new Error('GithubContextRepo should be initialized by name at least 1 character');
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
        const newOwner = new GithubContextOwner({
            name: owner
        });
        const newRepo = new GithubContextRepo({
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
        const newOwner = new GithubContextOwner({
            name: owner
        });
        const newRepo = new GithubContextRepo({
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
        const newOwner = new GithubContextOwner({
            name: owner
        });
        const newRepo = new GithubContextRepo({
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
        const newOwner = new GithubContextOwner({
            name: repo.owner
        });
        const newRepo = new GithubContextRepo({
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
        this.owner = new GithubContextOwner({ name: context.repo.owner });
        this.repo = new GithubContextRepo({ name: context.repo.repo });
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
        this.owner = new GithubContextOwner({ name: context.repo.owner });
        this.repo = new GithubContextRepo({ name: context.repo.repo });
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

var PullRequestStatusType;
(function (PullRequestStatusType) {
    PullRequestStatusType["open"] = "open";
    PullRequestStatusType["closed"] = "closed";
})(PullRequestStatusType || (PullRequestStatusType = {}));

class PullRequestStatus {
    status;
    constructor(status) {
        this.#assertIsPullRequestStatusType(status);
        this.status = status;
    }
    /**
     * Convert unknown to {@link PullRequestStatusType}
     * Throw Error if not in enum
     */
    #assertIsPullRequestStatusType(status) {
        if (!Object.values(PullRequestStatusType).includes(status)) {
            throw new Error('Status is not PullRequestStatusType');
        }
    }
}

class UpdateTime extends DateTime {
    constructor(date) {
        super(date);
    }
    static fromDate(date) {
        return new UpdateTime(date);
    }
    static fromISOString(date) {
        return new UpdateTime(date);
    }
}

class MergeTime extends DateTime {
    constructor(date) {
        super(date);
    }
    static fromDate(date) {
        return new MergeTime(date);
    }
    static fromISOString(date) {
        return new MergeTime(date);
    }
}

class CloseTime extends DateTime {
    constructor(date) {
        super(date);
    }
    static fromDate(date) {
        return new CloseTime(date);
    }
    static fromISOString(date) {
        return new CloseTime(date);
    }
}

class PullRequestBody {
    content;
    constructor(content) {
        if (!content || content.length <= 0) {
            throw new Error('PullRequestBody need to  be initialize by content with at least 1 character.');
        }
        this.content = content.replace('\r', '');
    }
}

class PullRequestSha {
    static SHA_LENGTH = 40;
    sha;
    constructor(sha) {
        if (sha.length !== PullRequestSha.SHA_LENGTH) {
            throw Error(`SHA need to be the string that has ${PullRequestSha.SHA_LENGTH} length`);
        }
        this.sha = sha;
    }
    static fromContext(githubContext) {
        const { pull_request } = githubContext.payload;
        if (!pull_request?.head?.sha) {
            throw new Error('To init PullRequestSha from Context, the trigger must be pull request event');
        }
        return new PullRequestSha(pull_request.head.sha);
    }
}

var _a;
class UserEmail {
    static #EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    email;
    constructor(email) {
        if (!this.#isEmail(email)) {
            throw new Error('UserEmail must be initialized by real email');
        }
        this.email = email;
    }
    #isEmail(email) {
        return _a.#EMAIL_REGEX.test(email);
    }
}
_a = UserEmail;

class UserName {
    name;
    constructor(name) {
        if (!name || name.length <= 0) {
            throw new Error('UserName must be initialized at least one character');
        }
        this.name = name;
    }
}

class UserAvatarUrl {
    url;
    constructor(url) {
        if (!url || url.length <= 0) {
            throw new Error('UserAvatarUrl must be initialized at least 1 character.');
        }
        this.url = url;
    }
}

/**
 * Init by github get user by id [api](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user-using-their-id)
 */
class PullRequestUser {
    id;
    avatarUrl;
    name;
    email;
    constructor(args) {
        if (!args.id) {
            throw new Error('Id need to be provided when initialize PublicUser');
        }
        if (!Number.isInteger(args.id)) {
            throw new Error('Id need to be integer when initialize PublicUser');
        }
        if (args.id <= 0) {
            throw new Error('Id need to be larger than 0 when initialize PublicUser');
        }
        this.id = args.id;
        this.avatarUrl = args.avatarUrl;
        this.name = args.name;
        this.email = args.email;
    }
    static fromGithub(user) {
        const { id, avatar_url, name, email } = user;
        const userAvatarUrl = new UserAvatarUrl(avatar_url);
        const userName = name ? new UserName(name) : null;
        const userEmail = email ? new UserEmail(email) : null;
        return new PullRequestUser({
            id,
            avatarUrl: userAvatarUrl,
            name: userName,
            email: userEmail
        });
    }
    toJson() {
        const { id, avatarUrl, name, email } = this;
        const json = {
            id: id,
            avatarUrl: avatarUrl.url,
            name: name ? name.name : null,
            email: email ? email.email : null
        };
        return json;
    }
}

class PullRequest {
    id;
    sha;
    body;
    state;
    user;
    createdAt;
    updatedAt;
    mergedAt;
    closedAt;
    constructor(args) {
        if (!args.id) {
            throw new Error('Id need to be provided when initialize Pull Request');
        }
        if (!Number.isInteger(args.id)) {
            throw new Error('Id need to be integer when initialize Pull Request');
        }
        if (args.id <= 0) {
            throw new Error('Id need to be larger than 0 when initialize Pull Request');
        }
        this.id = args.id;
        this.sha = args.sha;
        this.body = args.body;
        this.state = args.state;
        this.user = args.user;
        this.createdAt = args.createdAt;
        this.updatedAt = args.updatedAt;
        this.mergedAt = args.mergedAt;
        this.closedAt = args.closedAt;
    }
    static fromGithub(args) {
        const { githubPullRequest, sha } = args;
        const id = githubPullRequest.id;
        const shaInstance = sha instanceof PullRequestSha ? sha : new PullRequestSha(sha);
        const body = new PullRequestBody(githubPullRequest.body);
        const state = new PullRequestStatus(githubPullRequest.state);
        const user = PullRequestUser.fromGithub(githubPullRequest.user);
        const createdAt = CreateTime.fromISOString(githubPullRequest.created_at);
        const updatedAt = UpdateTime.fromISOString(githubPullRequest.updated_at);
        const mergedAt = githubPullRequest?.merged_at
            ? MergeTime.fromISOString(githubPullRequest.merged_at)
            : null;
        const closedAt = githubPullRequest?.closed_at
            ? CloseTime.fromISOString(githubPullRequest.closed_at)
            : null;
        return new PullRequest({
            id,
            sha: shaInstance,
            body,
            state,
            user,
            createdAt,
            updatedAt,
            mergedAt,
            closedAt
        });
    }
    toJson() {
        const { id, sha, body, state, user, createdAt, updatedAt, mergedAt, closedAt } = this;
        const json = {
            id: id,
            sha: sha.sha,
            body: body.content,
            state: state.status.toString(),
            user: user.toJson(),
            createdAt: createdAt.timestamp,
            updatedAt: updatedAt.timestamp,
            mergedAt: mergedAt ? mergedAt.timestamp : null,
            closedAt: closedAt ? closedAt.timestamp : null
        };
        return json;
    }
}

class PullRequestNumber {
    pullNumber;
    constructor(pullNumber) {
        this.pullNumber = pullNumber;
    }
    static fromGithubContext(githubContext) {
        const pullNumber = githubContext.payload.pull_request?.number;
        if (!pullNumber) {
            throw new Error('To list all commits from pull request, pull request and pull request number must exist in Github Context');
        }
        return new PullRequestNumber(pullNumber);
    }
}

class GetPullRequest {
    #octokit;
    #githubContext;
    constructor(args) {
        this.#octokit = args.octokit;
        this.#githubContext = args.githubContext;
    }
    async #fetchByOctokit() {
        const pullRequestNumber = PullRequestNumber.fromGithubContext(this.#githubContext);
        const { repo: { owner, repo } } = this.#githubContext;
        const githubPullRequestResponse = await this.#octokit.rest.pulls.get({
            owner,
            repo,
            pull_number: pullRequestNumber.pullNumber
        });
        if (githubPullRequestResponse.status !== 200) {
            throw new Error(`Fetch Pull Request from github failed with code: ${githubPullRequestResponse.status}`);
        }
        return githubPullRequestResponse;
    }
    async fetchFromGithub() {
        const sha = PullRequestSha.fromContext(this.#githubContext);
        const githubPullRequestResponse = await this.#fetchByOctokit();
        const pullRequest = PullRequest.fromGithub({
            githubPullRequest: githubPullRequestResponse.data,
            sha
        });
        return pullRequest;
    }
}

class RepoFullName {
    name;
    constructor(name) {
        if (!name) {
            throw new Error('RepoFullName should be initialized by name at least 1 character');
        }
        this.name = name;
    }
}

class RepoName {
    name;
    constructor(name) {
        if (!name) {
            throw new Error('RepoName should be initialized by name at least 1 character');
        }
        this.name = name;
    }
}

class Repository {
    id;
    name;
    fullName;
    constructor(args) {
        const { id, name, fullName } = args;
        if (!id) {
            throw new Error('Id need to be provided when initialize Repository');
        }
        if (!Number.isInteger(id)) {
            throw new Error('Id need to be integer when initialize Repository');
        }
        if (id <= 0) {
            throw new Error('Id need to be larger than 0 when initialize Repository');
        }
        this.id = id;
        this.name = name;
        this.fullName = fullName;
    }
    static fromGithub(githubRepository) {
        const name = new RepoName(githubRepository.name);
        const fullName = new RepoFullName(githubRepository.full_name);
        return new Repository({
            id: githubRepository.id,
            name,
            fullName
        });
    }
    toJson() {
        const { id, name, fullName } = this;
        const json = {
            id: id,
            name: name.name,
            fullName: fullName.name
        };
        return json;
    }
}

/**
 * This class will fetch contributor of an repository,
 * than fetch more detail from get user by id api
 */
class GetRepository {
    #octokit;
    #githubContext;
    constructor(args) {
        this.#octokit = args.octokit;
        this.#githubContext = args.githubContext;
    }
    async #fetchRepositoryByOctokit() {
        const { repo: { owner, repo } } = this.#githubContext;
        let response;
        try {
            response = await this.#octokit.rest.repos.get({
                owner,
                repo
            });
        }
        catch (_error) {
            const error = _error;
            Logger.error('Can not fetch repository from Octokit in #fetchRepositoryByOctokit');
            Logger.error(error);
            throw error;
        }
        const githubRepository = response.data;
        return githubRepository;
    }
    #createRepositoryInstance(githubRepository) {
        return Repository.fromGithub(githubRepository);
    }
    async fetchFromGithub() {
        let githubRepository;
        try {
            githubRepository = await this.#fetchRepositoryByOctokit();
        }
        catch (_error) {
            const error = _error;
            Logger.error('Can not fetch repository from Octokit in fetchFromGithub');
            Logger.error(error);
            throw error;
        }
        const repository = this.#createRepositoryInstance(githubRepository);
        return repository;
    }
}

/**
 * Init by github get user by id [api](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user-using-their-id)
 */
class PublicUser {
    id;
    avatarUrl;
    name;
    email;
    constructor(args) {
        if (!args.id) {
            throw new Error('Id need to be provided when initialize PublicUser');
        }
        if (!Number.isInteger(args.id)) {
            throw new Error('Id need to be integer when initialize PublicUser');
        }
        if (args.id <= 0) {
            throw new Error('Id need to be larger than 0 when initialize PublicUser');
        }
        this.id = args.id;
        this.avatarUrl = args.avatarUrl;
        this.name = args.name;
        this.email = args.email;
    }
    static fromGithub(user) {
        const { id, avatar_url, name, email } = user;
        const userAvatarUrl = new UserAvatarUrl(avatar_url);
        const userName = name ? new UserName(name) : null;
        const userEmail = email ? new UserEmail(email) : null;
        return new PublicUser({
            id,
            avatarUrl: userAvatarUrl,
            name: userName,
            email: userEmail
        });
    }
    toJson() {
        const { id, avatarUrl, name, email } = this;
        const json = {
            id: id,
            avatarUrl: avatarUrl.url,
            name: name ? name.name : null,
            email: email ? email.email : null
        };
        return json;
    }
}

/**
 * This class will fetch contributor of an repository,
 * than fetch more detail from get user by id api
 */
class ListContributor {
    #octokit;
    #githubContext;
    constructor(args) {
        this.#octokit = args.octokit;
        this.#githubContext = args.githubContext;
    }
    async #fetchContributorByOctokit() {
        const { repo: { owner, repo } } = this.#githubContext;
        let contributors;
        try {
            contributors = await this.#octokit.paginate(this.#octokit.rest.repos.listContributors, {
                owner,
                repo
            });
        }
        catch (_error) {
            const error = _error;
            Logger.error(error);
            throw new Error('Unable to fetch contributors from GitHub in #fetchContributorByOctokit');
        }
        const constructorsWithId = contributors.filter((contributor) => contributor.id !== undefined);
        return constructorsWithId;
    }
    async #fetchUserById(id) {
        try {
            const response = await this.#octokit.request('GET /user/{account_id}', {
                account_id: id,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });
            const githubUser = response.data;
            return githubUser;
        }
        catch (_error) {
            const error = _error;
            Logger.error(`Failed to fetch user with ID ${id}:`);
            Logger.error(error);
            return null;
        }
    }
    #createUserInstance(githubUser) {
        return PublicUser.fromGithub(githubUser);
    }
    async fetchFromGithub() {
        let githubContributors = [];
        try {
            githubContributors = await this.#fetchContributorByOctokit();
        }
        catch (_error) {
            const error = _error;
            Logger.error(error);
            throw new Error('Unable to fetch contributors from GitHub');
        }
        let githubUsers = [];
        try {
            const githubUsersWithNull = await Promise.all(githubContributors.map((contributor) => this.#fetchUserById(contributor.id)));
            githubUsers = githubUsersWithNull.filter((user) => user !== null);
        }
        catch (_error) {
            const error = _error;
            Logger.error(error);
            throw new Error('Unable to fetch users from GitHub');
        }
        const users = githubUsers.map((user) => this.#createUserInstance(user));
        return users;
    }
}

class CommitSha {
    static SHA_LENGTH = 40;
    sha;
    constructor(sha) {
        if (sha.length !== CommitSha.SHA_LENGTH) {
            throw Error(`SHA need to be the string that has ${CommitSha.SHA_LENGTH} length`);
        }
        this.sha = sha;
    }
}

class CommitMessage {
    content;
    constructor(content) {
        if (!content || content.length <= 0) {
            throw new Error('CommitMessage need to be initialized by content at least 1 character');
        }
        this.content = content.replace('\r', '');
    }
}

class Commit {
    sha;
    message;
    constructor(args) {
        const { sha, message } = args;
        this.sha = sha;
        this.message = message;
    }
    static fromGithub(githubCommit) {
        const sha = new CommitSha(githubCommit.sha);
        const message = new CommitMessage(githubCommit.commit.message);
        return new Commit({
            sha,
            message
        });
    }
    toJson() {
        const { sha, message } = this;
        const json = {
            sha: sha.sha,
            message: message.content
        };
        return json;
    }
}

class ListPrCommit {
    #octokit;
    #githubContext;
    constructor(args) {
        this.#octokit = args.octokit;
        this.#githubContext = args.githubContext;
    }
    async fetchFromGithub() {
        const githubCommits = await this.#fetchCommitByOctokit();
        const commits = githubCommits.map((githubCommit) => Commit.fromGithub(githubCommit));
        return commits;
    }
    async #fetchCommitByOctokit() {
        const pullRequestNumber = PullRequestNumber.fromGithubContext(this.#githubContext);
        const { repo: { owner, repo } } = this.#githubContext;
        const githubCommits = await this.#octokit.paginate(this.#octokit.rest.pulls.listCommits, {
            owner,
            repo,
            pull_number: pullRequestNumber.pullNumber
        });
        return githubCommits;
    }
}

class FileAdditionLength {
    length;
    constructor(length) {
        if (!Number.isInteger(length)) {
            throw new Error('length need to be integer when initialize FileAdditionLength');
        }
        if (length < 0) {
            throw new Error('length need to be non negative when initialize FileAdditionLength');
        }
        this.length = length;
    }
}

class FileChangeLength {
    length;
    constructor(length) {
        if (!Number.isInteger(length)) {
            throw new Error('length need to be integer when initialize FileChangeLength');
        }
        if (length < 0) {
            throw new Error('length need to be non negative when initialize FileChangeLength');
        }
        this.length = length;
    }
}

class FileDeletionLength {
    length;
    constructor(length) {
        if (!Number.isInteger(length)) {
            throw new Error('length need to be integer when initialize FileDeletionLength');
        }
        if (length < 0) {
            throw new Error('length need to be non negative when initialize FileDeletionLength');
        }
        this.length = length;
    }
}

class FileName {
    name;
    constructor(name) {
        if (!name || name.length <= 0) {
            throw new Error('FileName need to be initialized at least 1 character');
        }
        this.name = name;
    }
}

class FileSha {
    static SHA_LENGTH = 40;
    sha;
    constructor(sha) {
        if (sha.length !== FileSha.SHA_LENGTH) {
            throw Error(`SHA need to be the string that has ${FileSha.SHA_LENGTH} length`);
        }
        this.sha = sha;
    }
}

var PullRequestFileStatusType;
(function (PullRequestFileStatusType) {
    PullRequestFileStatusType["added"] = "added";
    PullRequestFileStatusType["removed"] = "removed";
    PullRequestFileStatusType["modified"] = "modified";
    PullRequestFileStatusType["renamed"] = "renamed";
    PullRequestFileStatusType["copied"] = "copied";
    PullRequestFileStatusType["changed"] = "changed";
    PullRequestFileStatusType["unchanged"] = "unchanged";
})(PullRequestFileStatusType || (PullRequestFileStatusType = {}));

class FileStatus {
    status;
    constructor(status) {
        this.#assertIsPullRequestFileStatusType(status);
        this.status = status;
    }
    /**
     * Convert unknown to PullRequestFileStatusType
     * Throw Error if not in enum
     */
    #assertIsPullRequestFileStatusType(status) {
        if (!Object.values(PullRequestFileStatusType).includes(status)) {
            throw new Error('Status is not WorkflowJobStepStatus');
        }
    }
}

class PullRequestFile {
    sha;
    filename;
    status;
    additions;
    deletions;
    changes;
    constructor(args) {
        this.sha = args.sha;
        this.filename = args.filename;
        this.status = args.status;
        this.additions = args.additions;
        this.deletions = args.deletions;
        this.changes = args.changes;
    }
    static fromGithub(githubFile) {
        const { sha, filename, status, additions, deletions, changes } = githubFile;
        const fileSha = new FileSha(sha);
        const fileName = new FileName(filename);
        const fileStatus = new FileStatus(status);
        const fileAdditionLength = new FileAdditionLength(additions);
        const fileDeletionLength = new FileDeletionLength(deletions);
        const fileChangeLength = new FileChangeLength(changes);
        return new PullRequestFile({
            sha: fileSha,
            filename: fileName,
            status: fileStatus,
            additions: fileAdditionLength,
            deletions: fileDeletionLength,
            changes: fileChangeLength
        });
    }
    toJson() {
        const { sha, filename, status, additions, deletions, changes } = this;
        const json = {
            sha: sha.sha,
            filename: filename.name,
            status: status.status.toString(),
            additions: additions.length,
            deletions: deletions.length,
            changes: changes.length
        };
        return json;
    }
}

class ListPrFileChange {
    #octokit;
    #githubContext;
    constructor(args) {
        this.#octokit = args.octokit;
        this.#githubContext = args.githubContext;
    }
    async fetchFromGithub() {
        const githubPrFiles = await this.#fetchByOctokit();
        const prFiles = githubPrFiles.map((file) => {
            return PullRequestFile.fromGithub(file);
        });
        return prFiles;
    }
    async #fetchByOctokit() {
        const pullRequestNumber = PullRequestNumber.fromGithubContext(this.#githubContext);
        const { repo: { owner, repo } } = this.#githubContext;
        const githubPrFile = await this.#octokit.paginate(this.#octokit.rest.pulls.listFiles, {
            owner,
            repo,
            pull_number: pullRequestNumber.pullNumber
        });
        return githubPrFile;
    }
}

class GetPrCreator {
    #octokit;
    #targetUserId;
    constructor(args) {
        this.#octokit = args.octokit;
        if (!args.targetUserId) {
            throw new Error('Id need to be provided when initialize Pull Request');
        }
        if (!Number.isInteger(args.targetUserId)) {
            throw new Error('Id need to be integer when initialize Pull Request');
        }
        if (args.targetUserId <= 0) {
            throw new Error('Id need to be larger than 0 when initialize Pull Request');
        }
        this.#targetUserId = args.targetUserId;
    }
    async #fetchUserById() {
        try {
            const response = await this.#octokit.request('GET /user/{account_id}', {
                account_id: this.#targetUserId,
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });
            const githubUser = response.data;
            return githubUser;
        }
        catch (_error) {
            const error = _error;
            Logger.error(`Failed to fetch user with ID ${this.#targetUserId}:`);
            Logger.error(error);
            throw error;
        }
    }
    #createUserInstance(githubUser) {
        return PublicUser.fromGithub(githubUser);
    }
    async fetchFromGithub() {
        let githubUser;
        try {
            githubUser = await this.#fetchUserById();
        }
        catch (_error) {
            const error = _error;
            Logger.error(error);
            throw new Error('Unable to fetch users from GitHub');
        }
        const users = this.#createUserInstance(githubUser);
        return users;
    }
}

class MainJobToFetchPullRequestInfo {
    #octokit;
    #githubContext;
    constructor(args) {
        this.#octokit = args.octokit;
        this.#githubContext = args.githubContext;
    }
    #isPullRequest() {
        return !!this.#githubContext.payload.pull_request;
    }
    async #fetchPullRequest() {
        const getPullRequest = new GetPullRequest({
            octokit: this.#octokit,
            githubContext: this.#githubContext
        });
        let pullRequest;
        try {
            pullRequest = await getPullRequest.fetchFromGithub();
        }
        catch (_error) {
            const error = _error;
            Logger.error('Fetch one Pull Request in MainJobToFetchPullRequestInfo failed, reason:');
            Logger.error(error);
            throw error;
        }
        return pullRequest;
    }
    async #fetchPrCreator(targetUserId) {
        const getPrCreator = new GetPrCreator({
            octokit: this.#octokit,
            targetUserId
        });
        let prCreator;
        try {
            prCreator = await getPrCreator.fetchFromGithub();
        }
        catch (_error) {
            const error = _error;
            Logger.error('Fetch Creator of Pull Request in MainJobToFetchPullRequestInfo failed, reason:');
            Logger.error(error);
            throw error;
        }
        return prCreator;
    }
    async #fetchRepository() {
        const getRepository = new GetRepository({
            octokit: this.#octokit,
            githubContext: this.#githubContext
        });
        let repository;
        try {
            repository = await getRepository.fetchFromGithub();
        }
        catch (_error) {
            const error = _error;
            Logger.error('Fetch repository in MainJobToFetchPullRequestInfo failed, reason:');
            Logger.error(error);
            throw error;
        }
        return repository;
    }
    async #fetchContributors() {
        const listContributor = new ListContributor({
            octokit: this.#octokit,
            githubContext: this.#githubContext
        });
        let contributors;
        try {
            contributors = await listContributor.fetchFromGithub();
        }
        catch (_error) {
            const error = _error;
            Logger.error('Fetch Contributors of Repository in MainJobToFetchPullRequestInfo failed, reason:');
            Logger.error(error);
            throw error;
        }
        return contributors;
    }
    async #fetchCommits() {
        const listPrCommits = new ListPrCommit({
            octokit: this.#octokit,
            githubContext: this.#githubContext
        });
        let commits;
        try {
            commits = await listPrCommits.fetchFromGithub();
        }
        catch (_error) {
            const error = _error;
            Logger.error('Fetch commits of pull request in MainJobToFetchPullRequestInfo failed, reason:');
            Logger.error(error);
            throw error;
        }
        return commits;
    }
    async #fetchFileChange() {
        const listPrFileChange = new ListPrFileChange({
            octokit: this.#octokit,
            githubContext: this.#githubContext
        });
        let filesChanges;
        try {
            filesChanges = await listPrFileChange.fetchFromGithub();
        }
        catch (_error) {
            const error = _error;
            Logger.error('Fetch Files Change of pull request in MainJobToFetchPullRequestInfo failed, reason:');
            Logger.error(error);
            throw error;
        }
        return filesChanges;
    }
    async #fetchWorkflowJobs() {
        const listWorkflowJobs = new ListWorkflowJobs({
            octokit: this.#octokit,
            githubContext: this.#githubContext
        });
        let jobs;
        try {
            jobs = await listWorkflowJobs.fetchFromGithub();
        }
        catch (_error) {
            const error = _error;
            Logger.error('Fetch Jobs in MainJobToFetchPullRequestInfo failed, reason:');
            Logger.error(error);
            throw error;
        }
        return jobs;
    }
    async #createCommit(args) {
        const { json } = args;
        const githubCommitter = new GithubCommitter({
            octokit: this.#octokit,
            githubContext: this.#githubContext
        });
        return githubCommitter.createComment({
            body: json,
            postToPullRequest: true
        });
    }
    async run() {
        if (this.#isPullRequest()) {
            try {
                const pullRequest = await this.#fetchPullRequest();
                const pullRequestCreator = await this.#fetchPrCreator(pullRequest.user.id);
                const commits = await this.#fetchCommits();
                const contributors = await this.#fetchContributors();
                const repository = await this.#fetchRepository();
                const filesChanges = await this.#fetchFileChange();
                const jobs = await this.#fetchWorkflowJobs();
                const json = {
                    pullRequest: pullRequest.toJson(),
                    pullRequestCreator: pullRequestCreator.toJson(),
                    commits: commits.map((commit) => commit.toJson()),
                    contributors: contributors.map((contributor) => contributor.toJson()),
                    repository: repository.toJson(),
                    filesChanges: filesChanges.map((fileChange) => fileChange.toJson()),
                    jobs: jobs.map((job) => job.toJson())
                };
                const jsonString = '```json\n' + JSON.stringify(json, null, 2) + '\n```';
                await this.#createCommit({
                    json: jsonString
                });
            }
            catch (_error) {
                const error = _error;
                Logger.error('Fail tp run MainJobToFetchPullRequestInfo failed, reason:');
                Logger.error(error);
                throw error;
            }
            Logger.info('[Step]: Fetch Pull Request Info Generate completed');
        }
        else {
            Logger.info('[Step]: Fetch Pull Request Info skipped since the commit is not pull request');
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
        const stepFetchPullRequestInfo = new MainJobToFetchPullRequestInfo({
            octokit,
            githubContext
        });
        // Info: (20250122 - Murky) Delay to that ActionRelay completed
        await setTimeout(5000);
        await stepGanttChartGenerate.run();
        await stepFetchPullRequestInfo.run();
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
