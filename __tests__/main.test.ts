/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * To mock dependencies in ESM, you can create fixtures that export mock
 * functions and objects. For example, the core module is mocked in this test,
 * so that the actual '@actions/core' module is not imported.
 */
import { jest } from '@jest/globals'
import * as core from '../__fixtures__/core.js'
import * as OctokitManager from '../__fixtures__/utils/octokitManager.js'
import * as MainJobsToGanttRunner from '../__fixtures__/steps/jobSummary/mainJobsToGanttRunner.js'

// Below is how to mock an class directly in factory
// jest.unstable_mockModule('../src/steps/jobSummary/listWorkflowJobs', () => {
//   return {
//     default: jest.fn().mockImplementation(() => ({
//       fetchFromGithub: jest.fn().mockImplementation(() => Promise.resolve([{}]))
//     }))
//   }
// })
jest.unstable_mockModule('../src/utils/octokitManager', () => OctokitManager)
jest.unstable_mockModule(
  '../src/steps/jobSummary/mainJobsToGanttRunner',
  () => MainJobsToGanttRunner
)

// Mocks should be declared before the module being tested is imported.
jest.unstable_mockModule('@actions/core', () => core)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// const { run } = await import('../src/main.js')

describe('main.ts', () => {
  beforeEach(() => {
    // Set the action's inputs as return values from core.getInput().
    core.getInput.mockImplementation(() => 'MOCK_GITHUB_TOKEN')
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('Should write test later', () => {
    expect(1).toBe(1)
  })

  // it('Sets the time output', async () => {
  //   await run()

  //   // Verify the time output was set.
  //   expect(core.setOutput).toHaveBeenNthCalledWith(
  //     1,
  //     'time',
  //     // Simple regex to match a time string in the format HH:MM:SS.
  //     expect.stringMatching(/^\d{2}:\d{2}:\d{2}/)
  //   )
  // })

  // it('Handles errors correctly', async () => {
  //   // MainJobsToGanttRunner.default.prototype.run = jest.fn(() =>
  //   //   Promise.reject(new Error('Mock error during execution'))
  //   // )
  //   jest
  //     .spyOn(MainJobsToGanttRunner, 'default')
  //     .mockImplementation(() => new Error('Mock error during execution'))
  //   await run()

  //   expect(core.setFailed).toHaveBeenCalled()
  // })
})
