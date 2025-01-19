import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'

import { WorkflowJobStatus } from '../../../src/types/job.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// since we use "Default" to export class, the class is actually in module.default
const { default: JobStatus } = await import(
  '../../../src/steps/jobSummary/jobStatus.js'
)

afterAll(() => {
  jest.resetAllMocks()
})

describe('steps/jobSummary/jobStatus', () => {
  it('Should init by WorkflowJobStatus', () => {
    const targetInstance = WorkflowJobStatus.completed
    const instance = new JobStatus(targetInstance)
    expect(instance.status).toBe(targetInstance)
  })

  it('Should init by string of WorkflowJobStatus', () => {
    const targetInstance = WorkflowJobStatus.pending
    const targetString = 'pending'
    const instance = new JobStatus(targetString)
    expect(instance.status).toBe(targetInstance)
  })

  it('Should throw Error if status is not from WorkflowJobStatus', () => {
    expect(() => {
      new JobStatus('invalid')
    }).toThrow(Error)
  })
})
