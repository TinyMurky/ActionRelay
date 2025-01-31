import { GitHubInstance } from '@/types/github.js';
import PublicUser from '@/utils/users/publicUser.js';
import { Context } from '@actions/github/lib/context.js';
/**
 * This class will fetch contributor of an repository,
 * than fetch more detail from get user by id api
 */
export default class ListContributor {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        githubContext: Context;
    });
    fetchFromGithub(): Promise<PublicUser[]>;
}
