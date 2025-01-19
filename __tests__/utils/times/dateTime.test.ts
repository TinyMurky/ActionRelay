import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// since we use "Default" to export class, the class is actually in module.default
const { default: DateTime } = await import(
  '../../../src/utils/times/dateTime.js'
)

afterAll(() => {
  jest.resetAllMocks()
})

describe('utils/times/dateTime', () => {
  describe('constructor', () => {
    it('should initialize with a valid Date instance', () => {
      const date = new Date('2025-01-15T11:04:32Z')
      const dateTime = new DateTime(date)
      expect(dateTime.date.toISOString()).toBe(date.toISOString())
    })

    it('should initialize with a valid ISO string', () => {
      const isoString = '2025-01-15T11:04:32.001Z'
      const dateTime = new DateTime(isoString)
      expect(dateTime.date.toISOString()).toBe(isoString)
    })

    it('should initialize with a valid ISO string without millisecond', () => {
      const isoString = '2025-01-15T11:04:32Z'
      const mockDate = new Date(isoString)
      const dateTime = new DateTime(isoString)
      expect(dateTime.date.toISOString()).toBe(mockDate.toISOString())
    })

    it('should throw an error for an invalid Date instance', () => {
      expect(() => new DateTime(new Date('invalid date'))).toThrow(Error)
    })

    it('should throw an error for an invalid ISO string', () => {
      expect(() => new DateTime('invalid date string')).toThrow(Error)
    })

    it('should throw an error for non-Date and non-string inputs', () => {
      expect(() => new DateTime(123 as unknown as string)).toThrow(Error)
    })
  })

  describe('static methods', () => {
    it('should create a DateTime instance using fromDate', () => {
      const date = new Date('2025-01-15T11:04:32Z')
      const dateTime = DateTime.fromDate(date)
      expect(dateTime.date.toISOString()).toBe(date.toISOString())
    })

    it('should create a DateTime instance using fromISOString', () => {
      const isoString = '2025-01-15T11:04:32.001Z'
      const dateTime = DateTime.fromISOString(isoString)
      expect(dateTime.date.toISOString()).toBe(isoString)
    })

    it('should create a DateTime instance without millisecond using fromISOString', () => {
      const isoString = '2025-01-15T11:04:32Z'
      const mockDate = new Date(isoString)
      const dateTime = DateTime.fromISOString(isoString)
      expect(dateTime.date.toISOString()).toBe(mockDate.toISOString())
    })
  })

  describe('timestamp', () => {
    it('should return the correct timestamp', () => {
      const isoString = '2025-01-15T11:04:32Z'
      const dateTime = new DateTime(isoString)
      expect(dateTime.timestamp).toBe(new Date(isoString).getTime())
    })
  })

  describe('private method behavior (via public interfaces)', () => {
    it('should throw an error for non-normalized ISO strings', () => {
      const invalidIsoString = '2025-01-15T11:04:32.0000Z'
      expect(() => new DateTime(invalidIsoString)).toThrow(Error)
    })
  })
})
