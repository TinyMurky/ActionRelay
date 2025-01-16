/**
 * Info: (20250116 - Murky)
 * JobRun is not store all information from github repos run api
 * this will only store run related data inside job
 */
export declare class JobRun {
    static readonly MIN_ID = 1;
    /**
     * The id of the associated workflow run.
     */
    readonly id: number;
    /**
     * URL of the api of associated workflow run.
     * ex: https://api.github.com/repos/TinyMurky/ActionRelay/actions/runs/12786972425
     */
    readonly url: string;
    /**
     * Attempt number of the associated workflow run.
     */
    readonly attempt: number;
    constructor(args: Readonly<{
        id: number;
        url: string;
        attempt: number | undefined;
    }>);
}
