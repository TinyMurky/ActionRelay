import { Sha } from '@/types/sha.js';
export default class CommitSha implements Sha {
    private static SHA_LENGTH;
    readonly sha: string;
    constructor(sha: Readonly<string>);
}
