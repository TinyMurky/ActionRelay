import * as core from '@actions/core'
import { githubContext } from '@/constants/github.js'

import OctokitManager from '@/utils/octokitManager.js'
import WaitForJobsToComplete from '@/steps/waitForJobsToComplete/waitForJobsToComplete.js'
import CoreInput from '@/utils/coreInput.js'
import { EnvConfig } from '@/utils/envConfig.js'

/**
 * The main function for the action.
 *
 * The main function for the action.
 */
export async function run(): Promise<void> {
  try {
    const coreInput = CoreInput.getInstance()
    const envConfig = new EnvConfig(process.env)
    const octokit = OctokitManager.getInstance(coreInput.githubToken)

    // Set outputs for other workflow steps to use
    const waitForJobsToComplete = new WaitForJobsToComplete({
      githubContext,
      octokit,
      coreInput,
      envConfig
    })

    await waitForJobsToComplete.start()
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
