/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * To mock dependencies in ESM, you can create fixtures that export mock
 * functions and objects. For example, the core module is mocked in this test,
 * so that the actual '@actions/core' module is not imported.
 */
import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'

import ListWorkflowJobs from '../../../src/apis/repos/listWorkflowJobs.js'
import OctokitManager from '../../../src/utils/octokit.js'
import { githubContext } from '../../../src/constants/github.js'
// Mocks should be declared before the module being tested is imported.
jest.unstable_mockModule('@actions/core', () => core)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.

describe('apis/repo/list_workflow_jobs', () => {
  beforeEach(() => {})

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Should fetch jobs', async () => {
    const octokit = OctokitManager.getInstance()
    console.log(octokit)
    const listWorkflowJobs = new ListWorkflowJobs({
      octokit,
      githubContext
    })

    const workflowJobs = await listWorkflowJobs.fetchFromGithub()
    console.log(JSON.stringify(workflowJobs))
  })
})
