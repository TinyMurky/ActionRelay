import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'
import * as StepStatus from '../../../__fixtures__/steps/jobSummary/stepStatus.js'
import * as StepConclusion from '../../../__fixtures__/steps/jobSummary/stepConclusion.js'
import * as StartTime from '../../../__fixtures__/utils/times/startTime.js'
import * as CompleteTime from '../../../__fixtures__/utils/times/completeTime.js'
import { GanttChartTaskTag } from '../../../src/types/ganttChart.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

jest.unstable_mockModule(
  '../../../src/steps/jobSummary/stepStatus',
  () => StepStatus
)

jest.unstable_mockModule(
  '../../../src/steps/jobSummary/stepConclusion',
  () => StepConclusion
)

jest.unstable_mockModule('../../../src/utils/times/startTime', () => StartTime)

jest.unstable_mockModule(
  '../../../src/utils/times/completeTime',
  () => CompleteTime
)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// since we use "Default" to export class, the class is actually in module.default
const { default: WorkflowJobStep } = await import(
  '../../../src/steps/jobSummary/workflowJobStep.js'
)

afterAll(() => {
  jest.resetAllMocks()
})

describe('steps/jobSummary/workflowJonStep', () => {
  describe('initialization', () => {
    it('Should be init by steps from github', () => {
      const mockStatus = 'completed' as 'queued' | 'in_progress' | 'completed'
      const mockRawSteps = {
        name: 'Set up job',
        status: mockStatus,
        conclusion: 'success',
        number: 1,
        startedAt: '2025-01-15T11:04:38Z',
        completedAt: '2025-01-15T11:04:38Z'
      }

      const step = new WorkflowJobStep(mockRawSteps)

      expect(step).toBeDefined()
      expect(step.startedAt).toBeDefined()
      expect(step.completedAt).toBeDefined()
    })

    it('Should init with null of startedAt and completedAt when not provided', () => {
      const mockStatus = 'completed' as 'queued' | 'in_progress' | 'completed'
      const mockRawSteps = {
        name: 'Set up job',
        status: mockStatus,
        conclusion: 'success',
        number: 1,
        startedAt: null,
        completedAt: null
      }

      const step = new WorkflowJobStep(mockRawSteps)

      expect(step).toBeDefined()
      expect(step.startedAt).toBeNull()
      expect(step.completedAt).toBeNull()
    })

    it('Should throw Error if step number is below 1', () => {
      const mockStatus = 'completed' as 'queued' | 'in_progress' | 'completed'
      const mockRawSteps = {
        name: 'Set up job',
        status: mockStatus,
        conclusion: 'success',
        number: 0,
        startedAt: '2025-01-15T11:04:38Z',
        completedAt: '2025-01-15T11:04:38Z'
      }

      expect(() => {
        new WorkflowJobStep(mockRawSteps)
      }).toThrow(Error)
    })
  })

  it('Should return false in `isStarted` if startedAt is null', () => {
    const mockStatus = 'completed' as 'queued' | 'in_progress' | 'completed'
    const mockRawSteps = {
      name: 'Set up job',
      status: mockStatus,
      conclusion: 'success',
      number: 1,
      startedAt: null,
      completedAt: null
    }

    const step = new WorkflowJobStep(mockRawSteps)
    expect(step.isStarted()).toBe(false)
  })

  it('Should return false in `isCompleted` if completedAt is null', () => {
    const mockStatus = 'completed' as 'queued' | 'in_progress' | 'completed'
    const mockRawSteps = {
      name: 'Set up job',
      status: mockStatus,
      conclusion: 'success',
      number: 1,
      startedAt: null,
      completedAt: null
    }

    const step = new WorkflowJobStep(mockRawSteps)
    expect(step.isCompleted()).toBe(false)
  })

  it('Should get ganttTag base on conclusion', () => {
    const mockStatus = 'completed' as 'queued' | 'in_progress' | 'completed'
    const mockRawSteps = {
      name: 'Set up job',
      status: mockStatus,
      conclusion: 'success',
      number: 1,
      startedAt: '2025-01-15T11:04:38Z',
      completedAt: '2025-01-15T11:04:38Z'
    }

    const step = new WorkflowJobStep(mockRawSteps)
    expect(step.ganttTag).toBe(GanttChartTaskTag.empty)
  })
})
