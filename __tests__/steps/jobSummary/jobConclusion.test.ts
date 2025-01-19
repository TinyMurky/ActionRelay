import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'

import { WorkflowJobConclusion } from '../../../src/types/job.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// since we use "Default" to export class, the class is actually in module.default
const { default: JobConclusion } = await import(
  '../../../src/steps/jobSummary/jobConclusion.js'
)

afterAll(() => {
  jest.resetAllMocks()
})

describe('steps/jobSummary/jobConclusion', () => {
  it('should return correct conclusion for a valid conclusion', () => {
    const instance = new JobConclusion('skipped')
    expect(instance.conclusion).toBe(WorkflowJobConclusion.skipped)

    const failureInstance = new JobConclusion('cancelled')
    expect(failureInstance.conclusion).toBe(WorkflowJobConclusion.cancelled)
  })

  it('should handle null conclusion and set it to unknown', () => {
    const instance = new JobConclusion(null)
    expect(instance.conclusion).toBe('unknown')
  })

  it('should throw error for invalid conclusion', () => {
    expect(() => new JobConclusion('invalid')).toThrow(Error)
  })
})
