import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'

import { WorkflowJobStatus } from '../../../src/types/job.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

afterAll(() => {
  jest.resetAllMocks()
})

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// since we use "Default" to export class, the class is actually in module.default
const { default: StepStatus } = await import(
  '../../../src/steps/jobSummary/stepStatus.js'
)

describe('steps/jobSummary/stepStatus', () => {
  it('Should init successfully by WorkflowJobStepStatus', () => {
    const targetStatus = WorkflowJobStatus.completed
    const stepStatus = new StepStatus(targetStatus)

    expect(stepStatus).toBeDefined()
    expect(stepStatus.status).toBe(targetStatus)
  })

  it('Should init successfully by string of WorkflowJobStepStatus', () => {
    const targetStatus = WorkflowJobStatus.completed
    const targetString = targetStatus.toString()
    const stepStatus = new StepStatus(targetString)

    expect(stepStatus).toBeDefined()
    expect(stepStatus.status).toBe(targetStatus)
  })

  it('Should throw Error when init by none WorkflowJobStatus', () => {
    const wrongString = 'Wrong'
    expect(() => {
      new StepStatus(wrongString)
    }).toThrow(Error)
  })
})
