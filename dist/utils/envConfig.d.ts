export declare class EnvConfig {
    readonly GITHUB_TOKEN: string;
    constructor(env: Readonly<NodeJS.ProcessEnv>);
}
declare const envConfigInstance: EnvConfig;
export default envConfigInstance;
