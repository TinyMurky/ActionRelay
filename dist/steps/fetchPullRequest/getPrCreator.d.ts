import { GitHubInstance } from '@/types/github.js';
import PublicUser from '@/utils/users/publicUser.js';
export default class GetPrCreator {
    #private;
    constructor(args: {
        octokit: GitHubInstance;
        targetUserId: number;
    });
    fetchFromGithub(): Promise<PublicUser>;
}
