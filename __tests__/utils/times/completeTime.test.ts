/**
 * DateTime is not mock in this test file
 */
import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'
import * as MockStartTime from '../../../__fixtures__/utils/times/startTime.js'

import StartTime from '../../../src/utils/times/startTime.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

jest.unstable_mockModule(
  '../../../src/utils/times/startTime',
  () => MockStartTime
)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// since we use "Default" to export class, the class is actually in module.default
const { default: CompleteTime } = await import(
  '../../../src/utils/times/completeTime.js'
)

afterAll(() => {
  jest.resetAllMocks()
})

describe('utils/times/startTime', () => {
  it('should init CompleteTime By date', () => {
    const newDate = new Date()
    const createdAt = CompleteTime.fromDate(newDate)

    expect(createdAt).toBeDefined()
  })

  it('should init CompleteTime By isoString, and call DateTime', () => {
    const createdAt = CompleteTime.fromISOString('2025-01-15T11:04:32Z')

    expect(createdAt).toBeDefined()
  })

  it('timeElapsedSinceStart', () => {
    const mockStartTimeString = '2025-01-15T11:00:00Z'
    const mockCompleteTimeString = '2025-01-15T12:00:00Z'

    const mockStartedAt = StartTime.fromISOString(mockStartTimeString)
    const completedAt = CompleteTime.fromISOString(mockCompleteTimeString)

    const timeElapsedSinceStart =
      completedAt.timeElapsedSinceStart(mockStartedAt)

    expect(timeElapsedSinceStart).toBe(1000 * 60 * 60)
  })

  it('timeElapsedSinceStart should throw error if startTime is after completeTime', () => {
    const mockStartTimeString = '2025-01-15T12:00:00Z'
    const mockCompleteTimeString = '2025-01-15T11:00:00Z'

    const mockStartedAt = StartTime.fromISOString(mockStartTimeString)
    const completedAt = CompleteTime.fromISOString(mockCompleteTimeString)

    expect(() => completedAt.timeElapsedSinceStart(mockStartedAt)).toThrow(
      Error
    )
  })
})
