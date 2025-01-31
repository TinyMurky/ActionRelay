import { Sha } from '@/types/sha.js';
import { Context } from '@actions/github/lib/context.js';
export default class PullRequestSha implements Sha {
    private static SHA_LENGTH;
    readonly sha: string;
    constructor(sha: Readonly<string>);
    static fromContext(githubContext: Context): PullRequestSha;
}
