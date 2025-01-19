/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'
import { WorkflowJobStatus } from '../../../src/types/job.js'

const mockStatus = WorkflowJobStatus.completed

const mockJobStatus = jest.fn().mockImplementation(() => {
  return {
    status: mockStatus
  }
})

export default mockJobStatus
