import * as core from '@actions/core'
import { githubContext } from '@/constants/github.js'

import OctokitManager from '@/utils/octokitManager.js'
import Logger from '@/utils/logger.js'

import MainJobsToGanttRunner from '@/steps/jobSummary/mainJobsToGanttRunner.js'

/**
 * The main function for the action.
 *
 * The main function for the action.
 */
export async function run(): Promise<void> {
  try {
    // const ms: string = core.getInput('milliseconds')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    Logger.debug(`Github Context: ${githubContext}`)

    // Log the current timestamp, wait, then log the new timestamp
    Logger.debug(new Date().toTimeString())

    const githubToken = core.getInput('GITHUB_TOKEN')
    const octokit = OctokitManager.getInstance(githubToken)

    const stepGanttChartGenerate = new MainJobsToGanttRunner({
      octokit,
      githubContext
    })

    await stepGanttChartGenerate.run()

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
