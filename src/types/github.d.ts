import * as github from '@actions/github'

export type GitHubInstance = ReturnType<typeof github.getOctokit>
