/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'

type MockStartTime = jest.Mock & {
  fromDate: jest.Mock<(date: Date) => ReturnType<MockStartTime>>
  fromISOString: jest.Mock<(isoString: string) => ReturnType<MockStartTime>>
}

const mockStartTime: MockStartTime = jest.fn((date: Date | string) => {
  const newDate = new Date(date)

  return {
    date: newDate,
    timestamp: jest.fn().mockImplementation(() => newDate.getTime())
  }
}) as MockStartTime

mockStartTime.fromDate = jest.fn((date: Date) => {
  return mockStartTime(date)
})

mockStartTime.fromISOString = jest.fn((isoString: string) => {
  return mockStartTime(isoString)
})

export default mockStartTime
