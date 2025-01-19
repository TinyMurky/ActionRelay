/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * To mock dependencies in ESM, you can create fixtures that export mock
 * functions and objects. For example, the core module is mocked in this test,
 * so that the actual '@actions/core' module is not imported.
 */
import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'
import { mockOctokit } from '../../../__fixtures__/node_module/octokit.js'
import { GitHubInstance } from '../../../src/types/github.js'

// Mocks should be declared before the module being tested is imported.
jest.unstable_mockModule('@actions/core', () => core)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.

afterAll(() => {
  jest.resetAllMocks()
})

// import ListWorkflowJobs from '../../../src/apis/repos/listWorkflowJobs.js'
const { default: ListWorkflowJobs } = await import(
  '../../../src/steps/jobSummary/listWorkflowJobs.js'
)

describe('steps/jobSummary/listWorkflowJobs', () => {
  const mockGithubContext = {
    payload: {
      action: 'opened',
      issue: {
        number: 42
      }
    },
    eventName: 'push',
    sha: 'mock-sha',
    ref: 'refs/heads/main',
    workflow: 'test-workflow',
    action: 'test-action',
    actor: 'test-actor',
    job: 'test-job',
    runNumber: 123,
    runId: 456,
    apiUrl: 'https://api.mock.github.com',
    serverUrl: 'https://mock.github.com',
    graphqlUrl: 'https://api.mock.github.com/graphql',
    get issue() {
      return { owner: 'mock-owner', repo: 'mock-repo', number: 42 }
    },
    get repo() {
      return { owner: 'mock-owner', repo: 'mock-repo' }
    }
  }

  it('Should fetch jobs', async () => {
    const octokit = new mockOctokit() as unknown as GitHubInstance
    const listWorkflowJobs = new ListWorkflowJobs({
      octokit,
      githubContext: mockGithubContext
    })
    const workflowJobs = await listWorkflowJobs.fetchFromGithub()
    console.log(JSON.stringify(workflowJobs))

    expect(workflowJobs.length).toBeGreaterThan(0)
  })
})
