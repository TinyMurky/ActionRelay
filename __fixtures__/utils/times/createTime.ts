/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'

// Use belowType to mock static method
type MockCreateTime = jest.Mock & {
  fromDate: jest.Mock<(date: Date) => ReturnType<MockCreateTime>>
  fromISOString: jest.Mock<(isoString: string) => ReturnType<MockCreateTime>>
}

const mockCreateTime: MockCreateTime = jest.fn((date: Date | string) => {
  const newDate = new Date(date)

  return {
    date: newDate,
    timestamp: jest.fn().mockImplementation(() => newDate.getTime())
  }
}) as MockCreateTime

mockCreateTime.fromDate = jest.fn((date: Date) => mockCreateTime(date))
mockCreateTime.fromISOString = jest.fn((isoString: string) =>
  mockCreateTime(isoString)
)

export default mockCreateTime
