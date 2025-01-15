/**
 * Info: (20250115 - Murky)
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'
const mockFetchFromGithub = jest
  .fn()
  .mockImplementation(() => Promise.resolve([{}]))

const mockListWorkflow = jest.fn().mockImplementation(() => {
  return {
    fetchFromGithub: mockFetchFromGithub
  }
})

export default mockListWorkflow
