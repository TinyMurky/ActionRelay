/**
 * Manual mock class for WorkflowJobStep
 * Reference:
 * - https://jestjs.io/docs/es6-class-mocks
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'

import mockStartTime from '../../../__fixtures__/utils/times/startTime.js'
import mockCompleteTime from '../../../__fixtures__/utils/times/completeTime.js'

import { GanttChartTaskTag } from '../../../src/types/ganttChart.js'

const mockGanttTag = GanttChartTaskTag.empty

const mockStepStatus = jest.fn().mockImplementation(() => ({
  status: 'completed' // Default mocked status
}))

const mockStepConclusion = jest.fn().mockImplementation(() => ({
  conclusion: 'success', // Default mocked conclusion
  ganttTag: mockGanttTag
}))

const mockWorkflowJobStep = jest.fn().mockImplementation((step) => {
  const inputStep = step as {
    status: string
    conclusion: string | null
    name: string
    number: number
    started_at?: string | null
    completed_at?: string | null
  }

  const mockIsStarted = !!inputStep.started_at
  const mockIsCompleted = !!inputStep.completed_at

  return {
    name: inputStep.name || 'Mocked Step',
    status: new mockStepStatus(),
    conclusion: new mockStepConclusion(),
    number: inputStep.number || 1,
    startedAt: inputStep.started_at
      ? new mockStartTime(inputStep.started_at)
      : null,
    completedAt: inputStep.completed_at
      ? new mockCompleteTime(inputStep.completed_at)
      : null,
    isStarted: jest.fn(() => mockIsStarted),
    isCompleted: jest.fn(() => mockIsCompleted),
    ganttTag: mockGanttTag
  }
})

export default mockWorkflowJobStep
