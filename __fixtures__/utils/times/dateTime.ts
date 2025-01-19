/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'

const mockDateTime = jest.fn((date: Date | string) => {
  const newDate = new Date(date)

  return {
    date: newDate,
    timestamp: jest.fn().mockImplementation(() => newDate.getTime())
  }
})

export default mockDateTime
