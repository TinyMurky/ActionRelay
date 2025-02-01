import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'

import Logger from '@/utils/logger.js'
import GithubCommitter from '@/utils/github/githubCommitter.js'
import PullRequest from '@/utils/pullRequests/pullRequest.js'
import Repository from '@/utils/repos/repository.js'
import PublicUser from '@/utils/users/publicUser.js'
import Commit from '@/utils/commits/commit.js'
import PullRequestFile from '@/utils/files/pullRequestFile.js'
import WorkflowJob from '@/utils/jobs/workflowJob.js'

import GetPullRequest from '@/steps/fetchPullRequest/getPullRequest.js'
import GetRepository from '@/steps/fetchPullRequest/getRepository.js'
import ListContributor from '@/steps/fetchPullRequest/listContributor.js'
import ListPrCommit from '@/steps/fetchPullRequest/listPrCommit.js'
import ListPrFileChange from '@/steps/fetchPullRequest/listPrFileChange.js'
import GetPrCreator from '@/steps/fetchPullRequest/getPrCreator.js'

import ListWorkflowJobs from '@/steps/jobSummary/listWorkflowJobs.js'
import * as httpm from '@actions/http-client'
import CoreInput from '@/utils/coreInput.js'
import { TypedResponse } from '@actions/http-client/lib/interfaces.js'

export default class MainJobToFetchPullRequestInfo {
  readonly #octokit: GitHubInstance
  readonly #githubContext: Context
  readonly #httpClient: httpm.HttpClient
  readonly #coreInput: CoreInput

  constructor(args: {
    octokit: GitHubInstance
    githubContext: Context
    httpClient: httpm.HttpClient
    coreInput: CoreInput
  }) {
    this.#octokit = args.octokit
    this.#githubContext = args.githubContext
    this.#httpClient = args.httpClient
    this.#coreInput = args.coreInput
  }

  #isPullRequest() {
    return !!this.#githubContext.payload.pull_request
  }

  async #fetchPullRequest() {
    const getPullRequest = new GetPullRequest({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    let pullRequest: PullRequest

    try {
      pullRequest = await getPullRequest.fetchFromGithub()
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        'Fetch one Pull Request in MainJobToFetchPullRequestInfo failed, reason:'
      )
      Logger.error(error)
      throw error
    }

    return pullRequest
  }

  async #fetchPrCreator(targetUserId: number) {
    const getPrCreator = new GetPrCreator({
      octokit: this.#octokit,
      targetUserId
    })

    let prCreator: PublicUser

    try {
      prCreator = await getPrCreator.fetchFromGithub()
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        'Fetch Creator of Pull Request in MainJobToFetchPullRequestInfo failed, reason:'
      )
      Logger.error(error)
      throw error
    }

    return prCreator
  }

  async #fetchRepository() {
    const getRepository = new GetRepository({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    let repository: Repository

    try {
      repository = await getRepository.fetchFromGithub()
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        'Fetch repository in MainJobToFetchPullRequestInfo failed, reason:'
      )
      Logger.error(error)
      throw error
    }

    return repository
  }

  async #fetchContributors() {
    const listContributor = new ListContributor({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    let contributors: PublicUser[]

    try {
      contributors = await listContributor.fetchFromGithub()
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        'Fetch Contributors of Repository in MainJobToFetchPullRequestInfo failed, reason:'
      )
      Logger.error(error)
      throw error
    }

    return contributors
  }

  async #fetchCommits() {
    const listPrCommits = new ListPrCommit({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    let commits: Commit[]

    try {
      commits = await listPrCommits.fetchFromGithub()
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        'Fetch commits of pull request in MainJobToFetchPullRequestInfo failed, reason:'
      )
      Logger.error(error)
      throw error
    }

    return commits
  }

  async #fetchFileChange() {
    const listPrFileChange = new ListPrFileChange({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    let filesChanges: PullRequestFile[]

    try {
      filesChanges = await listPrFileChange.fetchFromGithub()
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        'Fetch Files Change of pull request in MainJobToFetchPullRequestInfo failed, reason:'
      )
      Logger.error(error)
      throw error
    }

    return filesChanges
  }

  async #fetchWorkflowJobs() {
    const listWorkflowJobs = new ListWorkflowJobs({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    let jobs: WorkflowJob[]

    try {
      jobs = await listWorkflowJobs.fetchFromGithub()
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        'Fetch Jobs in MainJobToFetchPullRequestInfo failed, reason:'
      )
      Logger.error(error)
      throw error
    }

    return jobs
  }

  async #createCommit(args: Readonly<{ json: string }>) {
    const { json } = args
    const githubCommitter = new GithubCommitter({
      octokit: this.#octokit,
      githubContext: this.#githubContext
    })

    return githubCommitter.createComment({
      body: json,
      postToPullRequest: true
    })
  }

  async #postJson(json: object) {
    const relayServerUrl = this.#coreInput.relayServerUrl
    let response: TypedResponse<unknown>

    try {
      response = await this.#httpClient.postJson(relayServerUrl, json)
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        'Post Json Failed in MainJobToFetchPullRequestInfo failed, reason:'
      )
      Logger.error(error)
      throw error
    }

    if (response.statusCode <= 299 && response.statusCode >= 200) {
      const errorMessage = `Post Json to Relay Server Url fail, status code: ${response.statusCode}, reason: ${response.result}`
      Logger.error(errorMessage)
      throw new Error(errorMessage)
    }
  }

  public async run() {
    if (this.#isPullRequest()) {
      let json: object
      try {
        const pullRequest = await this.#fetchPullRequest()
        const pullRequestCreator = await this.#fetchPrCreator(
          pullRequest.user.id
        )
        const commits = await this.#fetchCommits()
        const contributors = await this.#fetchContributors()
        const repository = await this.#fetchRepository()
        const filesChanges = await this.#fetchFileChange()
        const jobs = await this.#fetchWorkflowJobs()

        json = {
          pullRequest: pullRequest.toJson(),
          pullRequestCreator: pullRequestCreator.toJson(),
          commits: commits.map((commit) => commit.toJson()),
          contributors: contributors.map((contributor) => contributor.toJson()),
          repository: repository.toJson(),
          filesChanges: filesChanges.map((fileChange) => fileChange.toJson()),
          jobs: jobs.map((job) => job.toJson())
        }

        const jsonString = '```json\n' + JSON.stringify(json, null, 2) + '\n```'

        Logger.debug(jsonString)

        await this.#createCommit({
          json: jsonString
        })
      } catch (_error) {
        const error = _error as Error
        Logger.error(
          'Fail tp run MainJobToFetchPullRequestInfo failed, reason:'
        )
        Logger.error(error)
        throw error
      }

      try {
        await this.#postJson(JSON)
      } catch (_error) {
        const error = _error as Error
        Logger.error(
          'Post Json to Relay Server url fail in MainJobsToFetchPullRequestInfo, reason:'
        )
        Logger.error(error)
        Logger.error('Skip Post Json to Relay Server step')
      }

      Logger.info('[Step]: Fetch Pull Request Info Generate completed')
    } else {
      Logger.info(
        '[Step]: Fetch Pull Request Info skipped since the commit is not pull request'
      )
    }
  }
}
