/**
 * Manual mock class, please check
 * - https://jestjs.io/docs/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'

const mockJobRun = jest.fn().mockImplementation(() => {
  return {
    id: 12786972425,
    url: 'https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425',
    attempt: 1
  }
})

export default mockJobRun
