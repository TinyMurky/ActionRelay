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

import * as core from '@actions/core'
import { githubContext } from '@/constants/github.js'

import OctokitManager from '@/utils/octokitManager.js'
import Logger from '@/utils/logger.js'

import MainJobsToGanttRunner from '@/steps/jobSummary/mainJobsToGanttRunner.js'
import CoreInput from '@/utils/coreInput.js'

import { setTimeout } from 'timers/promises'
import MainJobToFetchPullRequestInfo from '@/steps/fetchPullRequest/mainJobToFetchPullRequestInfo.js'
import HttpClientManager from '@/utils/httpClientManager.js'

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

    const coreInput = CoreInput.getInstance()
    const octokit = OctokitManager.getInstance(coreInput.githubToken)
    const httpClient = HttpClientManager.getInstance()

    const stepGanttChartGenerate = new MainJobsToGanttRunner({
      octokit,
      githubContext
    })

    const stepFetchPullRequestInfo = new MainJobToFetchPullRequestInfo({
      octokit,
      githubContext,
      httpClient,
      coreInput
    })

    // Info: (20250122 - Murky) Delay to that ActionRelay completed
    await setTimeout(5000)

    await stepGanttChartGenerate.run()
    await stepFetchPullRequestInfo.run()

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
