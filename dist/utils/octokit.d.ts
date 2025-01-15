import { GitHubInstance } from '@/types/github.js';
/**
 * Info: (20250113 - Murky)
 *
 * octokit is the toolkit provided by [@action/github](https://github.com/actions/toolkit/tree/main/packages/github),
 *
 * It can access to [Github API](https://docs.github.com/en/rest/quickstart)
 * by using structure described in [octokit/rest.js](https://octokit.github.io/rest.js/v21/#repos-get)
 */
export default class OctokitManager {
    #private;
    /**
     * Info: (20250114 - Murky)
     * @param envConfig - The EnvConfig class, default is envConfigInstance
     */
    static getInstance(githubToken: Readonly<string>): GitHubInstance;
}
