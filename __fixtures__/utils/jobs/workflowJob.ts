/**
 * Manual mock class for WorkflowJobStep
 * Reference:
 * - https://jestjs.io/docs/es6-class-mocks
 * - https://jestjs.io/docs/manual-mocks
 */
import { jest } from '@jest/globals'

import mockStartTime from '../times/startTime.js'
import mockCreateTime from '../times/createTime.js'
import mockCompleteTime from '../times/completeTime.js'
import mockJobRun from '../../../__fixtures__/steps/jobSummary/jobRun.js'
import mockJobStatus from '../../../__fixtures__/steps/jobSummary/jobStatus.js'
import mockJobConclusion from '../../../__fixtures__/steps/jobSummary/jobConclusion.js'
import mockWorkflowJobStep from './workflowJobStep.js'

import WorkflowJob from '../../../src/steps/jobSummary/workflowJob.js'
import { WorkflowJobType } from '../../../src/types/job.js'

// Use belowType to mock static method
type MockWorkflowJob = jest.Mock & {
  fromGithub: jest.Mock<(job: WorkflowJobType) => ReturnType<MockWorkflowJob>>
}

const mockWorkflowJob: MockWorkflowJob = jest.fn(
  (args: Partial<WorkflowJob>) => {
    return {
      id: args.id || 35645168799,
      run:
        args.run ||
        new mockJobRun({
          id: 12786972425,
          url: 'https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425',
          attempt: 1
        }),
      nodeId: args.nodeId || 'CR_kwDONqnafs8AAAAITJ4cnw',
      headSha: args.headSha || '3b02363dfdf6e78ccb871b77183e354e3ed2c00c',
      status: args.status || new mockJobStatus('completed'),
      conclusion: args.conclusion || new mockJobConclusion('success'),
      createdAt:
        args.createdAt || new mockCreateTime('2025-01-15T11:04:32.000Z'),
      startedAt: new mockStartTime(args.startedAt),
      completedAt: new mockCompleteTime(args.completedAt),
      name: args.name || 'GitHub Actions Test',
      steps: args.steps || [
        new mockWorkflowJobStep({
          name: 'Set up job',
          status: 'completed',
          conclusion: 'success',
          number: 1,
          startedAt: '2025-01-15T11:04:38.000Z',
          completedAt: '2025-01-15T11:04:38.000Z'
        })
      ],
      checkRunUrl:
        args.checkRunUrl ||
        'https://api.github.com/repos/TinyMurky/ActionRelay/check-runs/35645168799',
      labels: args.labels || ['ubuntu-latest'],
      runnerId: args.runnerId || 44,
      runnerName: args.runnerName || 'GitHub Actions 20',
      runnerGroupId: args.runnerGroupId || 2,
      runnerGroupName: args.runnerGroupName || 'GitHub Actions',
      workflowName: args.workflowName || 'Continuous Integration',
      headBranch: args.headBranch || 'main',
      isStarted: jest.fn(() => !!args.startedAt),
      isCompleted: jest.fn(() => !!args.completedAt),
      filterStepWithBothStartAtAndCompleteAt: jest.fn(() =>
        mockWorkflowJob({
          ...args,
          steps:
            args.steps?.filter(
              (step) => step.isStarted() && step.isCompleted()
            ) || []
        })
      )
    }
  }
) as MockWorkflowJob

mockWorkflowJob.fromGithub = jest.fn((job: WorkflowJobType) => {
  const id: number = job.id
  const run = new mockJobRun({
    id: job.run_id,
    url: job.run_url,
    attempt: job.run_attempt
  })
  const nodeId: string = job.node_id
  const headSha: string = job.head_sha
  const url: string = job.url
  const htmlUrl: string = job.html_url ?? ''

  const status = new mockJobStatus(job.status)
  const conclusion = new mockJobConclusion(job.conclusion)

  const createdAt = mockCreateTime.fromISOString(job.created_at)

  const startedAt = job.started_at
    ? mockStartTime.fromISOString(job.started_at)
    : null

  const completedAt = job.completed_at
    ? mockCompleteTime.fromISOString(job.completed_at)
    : null

  const name: string = job.name

  const steps = job?.steps
    ? job?.steps.map((step) => new mockWorkflowJobStep(step))
    : []

  const checkRunUrl: string = job.check_run_url
  const labels: string[] = job.labels
  const runnerId: number = job.runner_id || 0
  const runnerName: string = job.runner_name || ''
  const runnerGroupId: number = job.runner_group_id || 0
  const runnerGroupName = job.runner_group_name || ''
  const workflowName = job.workflow_name || ''
  const headBranch = job.head_branch || ''
  return mockWorkflowJob({
    id,
    run,
    nodeId,
    headSha,
    url,
    htmlUrl,
    status,
    conclusion,
    createdAt,
    startedAt,
    completedAt,
    name,
    steps,
    checkRunUrl,
    labels,
    runnerId,
    runnerName,
    runnerGroupId,
    runnerGroupName,
    workflowName,
    headBranch
  })
})

export default mockWorkflowJobStep
