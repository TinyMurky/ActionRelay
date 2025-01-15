/**
 * Info: (20250113 - Murky)
 * Wrap core logger with log header
 *
 * Ref:
 https://github.com/catchpoint/workflow-telemetry-action/blob/master/src/logger.ts*/
export default class Logger {
    #private;
    static isDebugEnable(): boolean;
    static debug(message: string): void;
    static info(message: string): void;
    static error(message: string | Error): void;
}
