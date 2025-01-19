import { jest } from '@jest/globals'
import { WorkflowJobType } from '../../src/types/job'

export const mockOctokit = jest.fn().mockImplementation(() => {
  return {
    rest: {
      actions: {
        listJobsForWorkflowRun: jest.fn().mockImplementation(() => {
          return {
            data: {
              jobs: mockListJobs
            }
          }
        })
      }
    }
  }
})

const mockListJobs: WorkflowJobType[] = [
  {
    id: 35645168799,
    run_id: 12786972425,
    workflow_name: 'Continuous Integration',
    head_branch: 'main',
    run_url:
      'https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425',
    run_attempt: 1,
    node_id: 'CR_kwDONqnafs8AAAAITJ4cnw',
    head_sha: '3b02363dfdf6e78ccb871b77183e354e3ed2c00c',
    url: 'https://api.github.com/repos/TinyMurky/ActionRelay/actions/jobs/35645168799',
    html_url:
      'https://github.com/TinyMurky/ActionRelay/actions/runs/12786972425/job/35645168799',
    status: 'completed',
    conclusion: 'failure',
    created_at: '2025-01-15T11:04:32Z',
    started_at: '2025-01-15T11:04:38Z',
    completed_at: '2025-01-15T11:04:41Z',
    name: 'GitHub Actions Test',
    steps: [
      {
        name: 'Set up job',
        status: 'completed',
        conclusion: 'success',
        number: 1,
        started_at: '2025-01-15T11:04:38Z',
        completed_at: '2025-01-15T11:04:38Z'
      },
      {
        name: 'Checkout',
        status: 'completed',
        conclusion: 'success',
        number: 2,
        started_at: '2025-01-15T11:04:38Z',
        completed_at: '2025-01-15T11:04:39Z'
      },
      {
        name: 'Test Local Action',
        status: 'completed',
        conclusion: 'failure',
        number: 3,
        started_at: '2025-01-15T11:04:39Z',
        completed_at: '2025-01-15T11:04:39Z'
      },
      {
        name: 'Print Output',
        status: 'completed',
        conclusion: 'skipped',
        number: 4,
        started_at: '2025-01-15T11:04:39Z',
        completed_at: '2025-01-15T11:04:39Z'
      },
      {
        name: 'Post Checkout',
        status: 'completed',
        conclusion: 'success',
        number: 8,
        started_at: '2025-01-15T11:04:39Z',
        completed_at: '2025-01-15T11:04:39Z'
      },
      {
        name: 'Complete job',
        status: 'completed',
        conclusion: 'success',
        number: 9,
        started_at: '2025-01-15T11:04:39Z',
        completed_at: '2025-01-15T11:04:39Z'
      }
    ],
    check_run_url:
      'https://api.github.com/repos/TinyMurky/ActionRelay/check-runs/35645168799',
    labels: ['ubuntu-latest'],
    runner_id: 44,
    runner_name: 'GitHub Actions 20',
    runner_group_id: 2,
    runner_group_name: 'GitHub Actions'
  },
  {
    id: 35645169745,
    run_id: 12786972425,
    workflow_name: 'Continuous Integration',
    head_branch: 'main',
    run_url:
      'https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425',
    run_attempt: 1,
    node_id: 'CR_kwDONqnafs8AAAAITJ4gUQ',
    head_sha: '3b02363dfdf6e78ccb871b77183e354e3ed2c00c',
    url: 'https://api.github.com/repos/TinyMurky/ActionRelay/actions/jobs/35645169745',
    html_url:
      'https://github.com/TinyMurky/ActionRelay/actions/runs/12786972425/job/35645169745',
    status: 'completed',
    conclusion: 'success',
    created_at: '2025-01-15T11:04:33Z',
    started_at: '2025-01-15T11:04:46Z',
    completed_at: '2025-01-15T11:04:45Z',
    name: 'dump_contexts_to_log',
    steps: [
      {
        name: 'Set up job',
        status: 'completed',
        conclusion: 'success',
        number: 1,
        started_at: '2025-01-15T11:04:40Z',
        completed_at: '2025-01-15T11:04:40Z'
      },
      {
        name: 'Dump GitHub context',
        status: 'completed',
        conclusion: 'success',
        number: 2,
        started_at: '2025-01-15T11:04:40Z',
        completed_at: '2025-01-15T11:04:40Z'
      },
      {
        name: 'Dump job context',
        status: 'completed',
        conclusion: 'success',
        number: 3,
        started_at: '2025-01-15T11:04:40Z',
        completed_at: '2025-01-15T11:04:40Z'
      },
      {
        name: 'Dump steps context',
        status: 'completed',
        conclusion: 'success',
        number: 4,
        started_at: '2025-01-15T11:04:40Z',
        completed_at: '2025-01-15T11:04:40Z'
      },
      {
        name: 'Dump runner context',
        status: 'completed',
        conclusion: 'success',
        number: 5,
        started_at: '2025-01-15T11:04:40Z',
        completed_at: '2025-01-15T11:04:40Z'
      },
      {
        name: 'Dump strategy context',
        status: 'completed',
        conclusion: 'success',
        number: 6,
        started_at: '2025-01-15T11:04:40Z',
        completed_at: '2025-01-15T11:04:40Z'
      },
      {
        name: 'Dump matrix context',
        status: 'completed',
        conclusion: 'success',
        number: 7,
        started_at: '2025-01-15T11:04:40Z',
        completed_at: '2025-01-15T11:04:40Z'
      },
      {
        name: 'Complete job',
        status: 'completed',
        conclusion: 'success',
        number: 8,
        started_at: '2025-01-15T11:04:40Z',
        completed_at: '2025-01-15T11:04:40Z'
      }
    ],
    check_run_url:
      'https://api.github.com/repos/TinyMurky/ActionRelay/check-runs/35645169745',
    labels: ['ubuntu-latest'],
    runner_id: 31,
    runner_name: 'GitHub Actions 11',
    runner_group_id: 2,
    runner_group_name: 'GitHub Actions'
  }
]
