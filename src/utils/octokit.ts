import * as core from '@actions/core'
import * as github from '@actions/github'
import { GITHUB_TOKEN } from '@/constants/env.js'
import { GitHubInstance } from '@/types/github.js'

/**
 * Info: (20250113 - Murky)
 *
 * octokit is the toolkit provided by [@action/github](https://github.com/actions/toolkit/tree/main/packages/github),
 *
 * It can access to [Github API](https://docs.github.com/en/rest/quickstart)
 * by using structure described in [octokit/rest.js](https://octokit.github.io/rest.js/v21/#repos-get)
 */
export default class OctokitManager {
  static #octokitInstance: GitHubInstance | null = null

  public static getInstance(): GitHubInstance {
    if (!this.#octokitInstance) {
      if (!GITHUB_TOKEN) {
        const errorMessage = 'GITHUB_TOKEN is not import correctly'
        core.error(errorMessage)
        core.setFailed('GITHUB_TOKEN is not import correctly')
      }

      // Info: (20250113 - Murky) We can guaranty GITHUB_TOKEN exist
      // since we setFailed is not exist
      this.#octokitInstance = github.getOctokit(GITHUB_TOKEN!)
    }

    return this.#octokitInstance
  }
}
