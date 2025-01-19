import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'
import * as DateTime from '../../../__fixtures__/utils/times/dateTime.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

jest.unstable_mockModule('../../../src/utils/times/dateTime', () => DateTime)

afterAll(() => {
  jest.resetAllMocks()
})

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// since we use "Default" to export class, the class is actually in module.default
const { default: StartTime } = await import(
  '../../../src/utils/times/startTime.js'
)

describe('utils/times/startTime', () => {
  it('should init StartTime By date', () => {
    const newDate = new Date()
    const createdAt = StartTime.fromDate(newDate)

    expect(createdAt).toBeDefined()
  })

  it('should init StartTime By isoString, and call DateTime', () => {
    const createdAt = StartTime.fromISOString('2025-01-15T11:04:32Z')

    expect(createdAt).toBeDefined()
  })
})
