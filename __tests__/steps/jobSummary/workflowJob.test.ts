import { jest } from '@jest/globals'
import * as core from '../../../__fixtures__/core.js'

import * as JobStatus from '../../../__fixtures__/steps/jobSummary/jobStatus.js'
import * as JobConclusion from '../../../__fixtures__/steps/jobSummary/jobConclusion.js'
import * as JobRun from '../../../__fixtures__/steps/jobSummary/jobRun.js'

import * as WorkflowJobStep from '../../../__fixtures__/steps/jobSummary/workflowJobStep.js'

import * as StartTime from '../../../__fixtures__/utils/times/startTime.js'
import * as CreateTime from '../../../__fixtures__/utils/times/createTime.js'
import * as CompleteTime from '../../../__fixtures__/utils/times/completeTime.js'

/**
 * Module Mocks
 */
jest.unstable_mockModule('@actions/core', () => core)

jest.unstable_mockModule(
  '../../../src/steps/jobSummary/jobStatus',
  () => JobStatus
)

jest.unstable_mockModule(
  '../../../src/steps/jobSummary/jobConclusion',
  () => JobConclusion
)

jest.unstable_mockModule('../../../src/steps/jobSummary/jobRun', () => JobRun)

jest.unstable_mockModule(
  '../../../src/steps/jobSummary/workflowJobStep',
  () => WorkflowJobStep
)

jest.unstable_mockModule('../../../src/utils/times/startTime', () => StartTime)

jest.unstable_mockModule(
  '../../../src/utils/times/createTime',
  () => CreateTime
)

jest.unstable_mockModule(
  '../../../src/utils/times/completeTime',
  () => CompleteTime
)

// The module being tested should be imported dynamically. This ensures that the
// mocks are used in place of any actual dependencies.
// since we use "Default" to export class, the class is actually in module.default
const { default: WorkflowJob } = await import(
  '../../../src/steps/jobSummary/workflowJob.js'
)

afterAll(() => {
  jest.resetAllMocks()
})

describe('WorkflowJob', () => {
  const mockJobStatus = 'completed' as
    | 'queued'
    | 'in_progress'
    | 'completed'
    | 'waiting'
    | 'requested'
    | 'pending'

  const mockJobComplete = 'success' as
    | 'success'
    | 'failure'
    | 'neutral'
    | 'cancelled'
    | 'skipped'
    | 'timed_out'
    | 'action_required'
    | null

  const mocStepStatus = 'completed' as 'queued' | 'in_progress' | 'completed'

  const mockJobData = {
    id: 35645168799,
    run_id: 12786972425,
    run_url:
      'https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425',
    run_attempt: 1,
    node_id: 'CR_kwDONqnafs8AAAAITJ4cnw',
    head_sha: '3b02363dfdf6e78ccb871b77183e354e3ed2c00c',
    url: 'https://api.github.com/repos/TinyMurky/ActionRelay/actions/jobs/35645168799',
    html_url:
      'https://github.com/TinyMurky/ActionRelay/actions/runs/12786972425/job/35645168799',
    status: mockJobStatus,
    conclusion: mockJobComplete,
    created_at: '2025-01-15T11:04:32.000Z',
    started_at: '2025-01-15T11:04:38.000Z',
    completed_at: '2025-01-15T11:04:41.000Z',
    name: 'GitHub Actions Test',
    steps: [
      {
        name: 'Set up job',
        status: mocStepStatus,
        conclusion: 'success',
        number: 1,
        started_at: '2025-01-15T11:04:38.000Z',
        completed_at: '2025-01-15T11:04:38.000Z'
      },
      {
        name: 'Checkout',
        status: mocStepStatus,
        conclusion: 'success',
        number: 2,
        started_at: '2025-01-15T11:04:38.000Z',
        completed_at: '2025-01-15T11:04:39.000Z'
      },
      {
        name: 'Test Local Action',
        status: mocStepStatus,
        conclusion: 'failure',
        number: 3,
        started_at: '2025-01-15T11:04:39.000Z',
        completed_at: null
      }
    ],
    check_run_url:
      'https://api.github.com/repos/TinyMurky/ActionRelay/check-runs/35645168799',
    labels: ['ubuntu-latest'],
    runner_id: 44,
    runner_name: 'GitHub Actions 20',
    runner_group_id: 2,
    runner_group_name: 'GitHub Actions',
    workflow_name: 'Continuous Integration',
    head_branch: 'main'
  }

  it('should initialize WorkflowJob successfully using fromGithub', () => {
    const workflowJob = WorkflowJob.fromGithub(mockJobData)

    expect(workflowJob).toBeDefined()
    expect(workflowJob.id).toBe(mockJobData.id)
    expect(workflowJob.steps).toHaveLength(mockJobData.steps.length)
  })

  it('should filter steps with both startedAt and completedAt', () => {
    const workflowJob = WorkflowJob.fromGithub(mockJobData)

    const filteredJob = workflowJob.filterStepWithBothStartAtAndCompleteAt()
    expect(filteredJob.steps).toHaveLength(
      mockJobData.steps.filter((step) => step.started_at && step.completed_at)
        .length
    )
  })

  it('should return true for isStarted if startedAt is defined', () => {
    const workflowJob = WorkflowJob.fromGithub(mockJobData)
    expect(workflowJob.isStarted()).toBe(true)
  })

  it('should return true for isCompleted if completedAt is defined', () => {
    const workflowJob = WorkflowJob.fromGithub(mockJobData)
    expect(workflowJob.isCompleted()).toBe(true)
  })
})
