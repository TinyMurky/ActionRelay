/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'
import { WorkflowJobStepStatus } from '../../../src/types/job.js'

const mockStatus = WorkflowJobStepStatus.completed

// function below act like constructor
const mockStepStatus = jest.fn().mockImplementation(() => {
  return {
    status: mockStatus
  }
})

export default mockStepStatus
