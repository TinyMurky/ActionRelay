import { GitHubInstance } from '@/types/github.js';
import Repository from '@/utils/repos/repository.js';
import { Context } from '@actions/github/lib/context.js';
/**
 * This class will fetch contributor of an repository,
 * than fetch more detail from get user by id api
 */
export default class GetRepository {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        githubContext: Context;
    });
    fetchFromGithub(): Promise<Repository>;
}
