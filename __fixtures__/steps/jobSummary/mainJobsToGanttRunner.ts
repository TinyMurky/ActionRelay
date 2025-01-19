/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'

const mockMainJobsToGanttRunner = jest.fn().mockImplementation(() => {
  return {
    run: jest.fn(() => Promise.resolve())
  }
})

export default mockMainJobsToGanttRunner
