/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'
import { WorkflowJobStepConclusion } from '../../../src/types/job.js'
import { GanttChartTaskTag } from '../../../src/types/ganttChart.js'

const mockConclusion = WorkflowJobStepConclusion.success
const mockGanttTag = GanttChartTaskTag.empty

const mockStepConclusion = jest.fn().mockImplementation(() => {
  return {
    conclusion: mockConclusion,
    ganttTag: mockGanttTag
  }
})

export default mockStepConclusion
