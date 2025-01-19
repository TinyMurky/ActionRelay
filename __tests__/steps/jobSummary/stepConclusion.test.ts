import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'

import { WorkflowJobStepConclusion } from '../../../src/types/job.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// since we use "Default" to export class, the class is actually in module.default
const { default: StepConclusion } = await import(
  '../../../src/steps/jobSummary/stepConclusion.js'
)

afterAll(() => {
  jest.resetAllMocks()
})

describe('steps/jobSummary/stepConclusion', () => {
  it('should return correct conclusion for a valid conclusion', () => {
    const instance = new StepConclusion('skipped')
    expect(instance.conclusion).toBe(WorkflowJobStepConclusion.skipped)

    const failureInstance = new StepConclusion('cancelled')
    expect(failureInstance.conclusion).toBe(WorkflowJobStepConclusion.cancelled)
  })

  it('should return correct ganttTag for a valid conclusion', () => {
    const instance = new StepConclusion('success')
    expect(instance.ganttTag).toBe('empty')

    const failureInstance = new StepConclusion('failure')
    expect(failureInstance.ganttTag).toBe('crit')
  })

  it('should handle null conclusion and set it to unknown', () => {
    const instance = new StepConclusion(null)
    expect(instance.conclusion).toBe('unknown')
    expect(instance.ganttTag).toBe('done')
  })

  it('should throw error for invalid conclusion', () => {
    expect(() => new StepConclusion('invalid')).toThrow(Error)
  })
})
