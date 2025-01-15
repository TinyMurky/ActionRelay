import * as core from '@actions/core'
import { githubContext } from '@/constants/github.js'
import OctokitManager from '@/utils/octokit.js'
import ListWorkflowJobs from '@/apis/repos/listWorkflowJobs.js'
/**
 * The main function for the action.
 *
 * The main function for the action.
 */
export async function run(): Promise<void> {
  try {
    // const ms: string = core.getInput('milliseconds')

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Github Context: ${githubContext}`)

    // Log the current timestamp, wait, then log the new timestamp
    // core.debug(new Date().toTimeString())
    const octokit = OctokitManager.getInstance()

    const listWorkflowJobs = new ListWorkflowJobs({
      octokit,
      githubContext
    })

    const workflowJobs = await listWorkflowJobs.fetchFromGithub()

    core.debug(`workflowJobs ${JSON.stringify(workflowJobs)}`)
    core.debug(new Date().toTimeString())

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
