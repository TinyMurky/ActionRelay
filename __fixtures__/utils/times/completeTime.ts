/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'
import StartTime from '../../../src/utils/times/dateTime'

// Use belowType to mock static method
type MockCompleteTime = jest.Mock & {
  fromDate: jest.Mock<(date: Date) => ReturnType<MockCompleteTime>>
  fromISOString: jest.Mock<(isoString: string) => ReturnType<MockCompleteTime>>
}

const mockCompleteTime: MockCompleteTime = jest.fn((date: Date | string) => {
  const newDate = new Date(date)

  return {
    date: newDate,
    timestamp: jest.fn().mockImplementation(() => newDate.getTime()),
    timeElapsedSinceStart: jest.fn((startTime: StartTime) => {
      return newDate.getTime() - startTime.timestamp
    })
  }
}) as MockCompleteTime

mockCompleteTime.fromDate = jest.fn((date: Date) => {
  return mockCompleteTime(date)
})
mockCompleteTime.fromISOString = jest.fn((isoString: string) => {
  return mockCompleteTime(isoString)
})

export default mockCompleteTime
