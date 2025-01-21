/**
 * Info: (20250115 - Murky)
 * This can read env and change into class
 * might be delete later
 */
export declare class EnvConfig {
    readonly GITHUB_RUN_ATTEMPT: number;
    constructor(env: Readonly<NodeJS.ProcessEnv>);
}
declare const envConfigInstance: EnvConfig;
export default envConfigInstance;
