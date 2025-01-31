import { Sha } from '@/types/sha.js';
export default class FileSha implements Sha {
    private static SHA_LENGTH;
    readonly sha: string;
    constructor(sha: Readonly<string>);
}
