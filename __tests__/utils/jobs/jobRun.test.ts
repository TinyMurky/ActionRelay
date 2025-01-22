import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

const { default: JobRun } = await import('../../../src/utils/jobs/jobRun.js')

describe('utils/jobs/jobRun', () => {
  it('Should be initialized by github run data from job', () => {
    const githubRawRun = {
      runId: 12786972425,
      runUrl:
        'https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425',
      runAttempt: 1
    }

    const jobRun = new JobRun({
      id: githubRawRun.runId,
      url: githubRawRun.runUrl,
      attempt: githubRawRun.runAttempt
    })

    expect(jobRun).toBeDefined()
  })

  it('runAttempt should be zero if run attempt is undefined', () => {
    const githubRawRun = {
      runId: 12786972425,
      runUrl:
        'https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425',
      runAttempt: undefined
    }

    const jobRun = new JobRun({
      id: githubRawRun.runId,
      url: githubRawRun.runUrl,
      attempt: githubRawRun.runAttempt
    })

    expect(jobRun).toBeDefined()
    expect(jobRun.attempt).toBe(0)
  })

  it('Should throw Error When id < 1', () => {
    const githubRawRun = {
      runId: 0,
      runUrl:
        'https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425',
      runAttempt: 1
    }

    expect(() => {
      new JobRun({
        id: githubRawRun.runId,
        url: githubRawRun.runUrl,
        attempt: githubRawRun.runAttempt
      })
    }).toThrow(Error)
  })

  it('Should throw Error When url is empty string', () => {
    const githubRawRun = {
      runId: 1,
      runUrl: '',
      runAttempt: 1
    }

    expect(() => {
      new JobRun({
        id: githubRawRun.runId,
        url: githubRawRun.runUrl,
        attempt: githubRawRun.runAttempt
      })
    }).toThrow(Error)
  })
})
