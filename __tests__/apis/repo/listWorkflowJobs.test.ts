/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * To mock dependencies in ESM, you can create fixtures that export mock
 * functions and objects. For example, the core module is mocked in this test,
 * so that the actual '@actions/core' module is not imported.
 */
import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'

// import ListWorkflowJobs from '../../../src/apis/repos/listWorkflowJobs.js'
// import OctokitManager from '../../../src/utils/octokit.js'
// import { githubContext } from '../../../src/constants/github.js'
// Mocks should be declared before the module being tested is imported.
jest.unstable_mockModule('@actions/core', () => core)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.

describe('apis/repo/listWorkflowJobs', () => {
  const OLD_ENV = process.env

  // const mockGithubContext = {
  //   payload: {
  //     action: 'opened',
  //     issue: {
  //       number: 42
  //     }
  //   },
  //   eventName: 'push',
  //   sha: 'mock-sha',
  //   ref: 'refs/heads/main',
  //   workflow: 'test-workflow',
  //   action: 'test-action',
  //   actor: 'test-actor',
  //   job: 'test-job',
  //   runNumber: 123,
  //   runId: 456,
  //   apiUrl: 'https://api.mock.github.com',
  //   serverUrl: 'https://mock.github.com',
  //   graphqlUrl: 'https://api.mock.github.com/graphql',
  //   get issue() {
  //     return { owner: 'mock-owner', repo: 'mock-repo', number: 42 }
  //   },
  //   get repo() {
  //     return { owner: 'mock-owner', repo: 'mock-repo' }
  //   }
  // }

  beforeEach(() => {
    jest.resetModules() // FOR env: Most important - it clears the cache
    process.env = { ...OLD_ENV } // Make a copy
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  afterAll(() => {
    process.env = OLD_ENV // Restore old environment
  })

  it('Should implement later', () => {
    expect(1).toBe(1)
  })

  // it('Should fetch jobs', async () => {
  //   console.log('githubContext: ', githubContext)
  //   const octokit = OctokitManager.getInstance()
  //   console.log(octokit)
  //   const listWorkflowJobs = new ListWorkflowJobs({
  //     octokit,
  //     githubContext
  //   })
  //   const workflowJobs = await listWorkflowJobs.fetchFromGithub()
  //   console.log(JSON.stringify(workflowJobs))
  // })
})
