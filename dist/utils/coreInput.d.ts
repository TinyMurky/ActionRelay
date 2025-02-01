export default class CoreInput {
    #private;
    static instance: CoreInput | null;
    readonly githubToken: string;
    /**
     * Time out waiting progress after timeoutAfterMinute,
     * maximum is 15 minute
     */
    readonly timeoutAfterMinute: number;
    /**
     * How long of waiting to check if job complete in millisecond
     */
    readonly intervalToCheckJobs: number;
    readonly nameOfThisJob: string;
    readonly relayServerUrl: string;
    private constructor();
    static getInstance(): CoreInput;
}
