import * as core from '@actions/core'
import Logger from '@/utils/logger.js'

export default class CoreInput {
  static instance: CoreInput | null = null

  readonly githubToken: string

  /**
   * Time out waiting progress after timeoutAfterMinute,
   * maximum is 15 minute
   */
  readonly timeoutAfterMinute: number

  /**
   * How long of waiting to check if job complete in millisecond
   */
  readonly intervalToCheckJobs: number

  readonly NAME_OF_THIS_JOB: string

  private constructor() {
    this.githubToken = core.getInput('GITHUB_TOKEN')

    const timeoutAfterMinute = parseInt(core.getInput('TIMEOUT_AFTER_MINUTE'))

    if (isNaN(timeoutAfterMinute)) {
      const errorMessage = 'TIMEOUT_AFTER_MINUTE should be number'
      this.#throwErrorAndSetFailed(errorMessage)
    }

    if (timeoutAfterMinute <= 0) {
      const errorMessage = 'TIMEOUT_AFTER_MINUTE should be greater than 0'
      this.#throwErrorAndSetFailed(errorMessage)
    }

    this.timeoutAfterMinute = Math.max(timeoutAfterMinute, 15)

    const intervalToCheckJobs = parseInt(
      core.getInput('INTERVAL_TO_CHECK_JOBS')
    )

    if (isNaN(intervalToCheckJobs)) {
      const errorMessage = 'INTERVAL_TO_CHECK_JOBS should be number'
      this.#throwErrorAndSetFailed(errorMessage)
    }

    if (intervalToCheckJobs <= 0) {
      const errorMessage = 'INTERVAL_TO_CHECK_JOBS should be greater than 0'
      this.#throwErrorAndSetFailed(errorMessage)
    }

    this.intervalToCheckJobs = intervalToCheckJobs

    const nameOfThisJob = core.getInput('NAME_OF_THIS_JOB')

    if (!nameOfThisJob) {
      const errorMessage = 'NAME_OF_THIS_JOB need to be provided'
      this.#throwErrorAndSetFailed(errorMessage)
    }

    this.NAME_OF_THIS_JOB = nameOfThisJob
  }

  static getInstance() {
    if (CoreInput.instance === null) {
      CoreInput.instance = new CoreInput()
    }
    return CoreInput.instance
  }

  #throwErrorAndSetFailed(errorMessage: Readonly<string>) {
    Logger.error(errorMessage)
    core.setFailed(errorMessage)
    throw new Error(errorMessage)
  }
}
