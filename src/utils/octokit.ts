import * as core from '@actions/core'
import * as github from '@actions/github'
import { GitHubInstance } from '@/types/github.js'
import envConfigInstance, { EnvConfig } from '@/utils/envConfig.js'
import Logger from '@/utils/logger.js'

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

  /**
   * Info: (20250114 - Murky)
   * @param envConfig - The EnvConfig class, default is envConfigInstance
   */
  public static getInstance(
    envConfig: Readonly<EnvConfig> = envConfigInstance
  ): GitHubInstance {
    if (!this.#octokitInstance) {
      const githubToken = envConfig.GITHUB_TOKEN

      if (!githubToken) {
        const errorMessage = 'GITHUB_TOKEN is empty string'
        Logger.error(errorMessage)
        core.setFailed(errorMessage)
        throw new Error(githubToken)
      }

      // Info: (20250113 - Murky) We can guaranty GITHUB_TOKEN exist
      // since we setFailed is not exist
      this.#octokitInstance = github.getOctokit(githubToken)
    }

    return this.#octokitInstance
  }
}
