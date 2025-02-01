/**
 * This code need to be fetch by server, because when job is still running, the log file won't created
 */
import { createWriteStream, readFile, existsSync } from 'node:fs'
import { promisify } from 'node:util'

import { GitHubInstance } from '@/types/github.js'
import { Context } from '@actions/github/lib/context.js'
import * as httpm from '@actions/http-client'

import Logger from '@/utils/logger.js'
import { EnvConfig } from '@/utils/envConfig.js'
import FileSystem from '@/utils/fileSystem.js'

/**
 * This step is download workflows log (which have all jobs log store in zip)
 */
export default class DownloadWorkflowAttemptLog {
  static readonly #FILE_EXTENSION = 'zip'

  static readonly #readFileAsync = promisify(readFile)

  readonly #octokit: GitHubInstance

  readonly #githubContext: Context

  readonly #envConfig: EnvConfig

  readonly #httpClient: httpm.HttpClient

  constructor(args: {
    octokit: GitHubInstance
    githubContext: Context
    envConfig: EnvConfig
    httpClient: httpm.HttpClient
  }) {
    this.#octokit = args.octokit
    this.#githubContext = args.githubContext
    this.#envConfig = args.envConfig
    this.#httpClient = args.httpClient
  }

  async #fetchLogDownloadUrlFromOctokit() {
    const attempt_number = this.#envConfig.GITHUB_RUN_ATTEMPT

    const {
      runId: run_id,
      repo: { owner, repo }
    } = this.#githubContext

    const redirectResponse =
      await this.#octokit.rest.actions.downloadWorkflowRunAttemptLogs({
        owner,
        repo,
        run_id,
        attempt_number
      })

    Logger.info(
      `[redirectResponse]: ${JSON.stringify(redirectResponse.headers, null, 2)}`
    )
    const downloadUrl = redirectResponse.headers.location

    if (!downloadUrl) {
      const errorMessage =
        'Workflow Attempt Log does not receive downloadUrl from Github'
      Logger.error(errorMessage)
      throw new Error(errorMessage)
    }

    Logger.info(`[Download Url]: ${downloadUrl}`)

    return downloadUrl.toString()
  }

  #generateFileName() {
    const {
      runId: run_id,
      repo: { repo }
    } = this.#githubContext

    const fileName = `${repo}_run_${run_id}.${DownloadWorkflowAttemptLog.#FILE_EXTENSION}`

    return fileName
  }

  async #downloadLog(
    args: Readonly<{
      downloadUrl: string
      saveFileName: string
    }>
  ) {
    const { downloadUrl, saveFileName } = args
    FileSystem.initDownloadFolder()

    const saveUrl = FileSystem.getDownloadFilePath(saveFileName)
    const destination = createWriteStream(saveUrl)
    const response = await this.#httpClient.get(downloadUrl)
    response.message.pipe(destination)

    return saveUrl
  }

  async #readLog(saveUrl: Readonly<string>) {
    if (!existsSync(saveUrl)) {
      const errorMessage = `Workflow Logs is not exist in path ${saveUrl}`
      Logger.error(errorMessage)
      throw new Error(errorMessage)
    }
    const logZipBuffer: Buffer<ArrayBufferLike> =
      await DownloadWorkflowAttemptLog.#readFileAsync(saveUrl)

    return logZipBuffer
  }

  public async downloadAndReturnZipBuffer() {
    try {
      const filename = this.#generateFileName()
      const downloadUrl = await this.#fetchLogDownloadUrlFromOctokit()

      Logger.info(`[Download Url]: ${downloadUrl}`)

      const saveUrl = await this.#downloadLog({
        downloadUrl,
        saveFileName: filename
      })
      const logZipBuffer = await this.#readLog(saveUrl)

      return {
        saveUrl,
        logZipBuffer
      }
    } catch (_error) {
      const error = _error as Error
      Logger.error('Download Workflow Attempt Log failed, reason:')
      Logger.error(error)
      throw error
    }
  }
}
