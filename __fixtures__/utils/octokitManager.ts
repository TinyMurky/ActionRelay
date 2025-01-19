/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'

import { GitHubInstance } from '../../src/types/github.js'

import { mockOctokit } from '../../__fixtures__/node_module/octokit.js'
// Use belowType to mock static method
type MockOctokitManager = jest.Mock & {
  getInstance: jest.Mock<() => GitHubInstance>
}

const octokit = new mockOctokit() as unknown as GitHubInstance

const mockOctokitManager: MockOctokitManager = jest.fn(() => {
  return {}
}) as MockOctokitManager

mockOctokitManager.getInstance = jest.fn(() => octokit)

export default mockOctokitManager
