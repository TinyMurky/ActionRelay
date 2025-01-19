/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'
import { WorkflowJobConclusion } from '../../../src/types/job.js'

const mockConclusion = WorkflowJobConclusion.success

const mockJobConclusion = jest.fn().mockImplementation(() => {
  return {
    conclusion: mockConclusion
  }
})

export default mockJobConclusion
