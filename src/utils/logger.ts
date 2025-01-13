import * as core from '@actions/core'

/**
 * Info: (20250113 - Murky)
 * Wrap core logger with log header
 * 
 * Ref: 
 https://github.com/catchpoint/workflow-telemetry-action/blob/master/src/logger.ts*/
export default class Logger {
  static #logHeader = '[Action Relay]'

  static #addHeaderToMessage(message: string): string {
    const wrappedMessage = Logger.#logHeader + ': ' + message
    return wrappedMessage
  }

  public static isDebugEnable(): boolean {
    return core.isDebug()
  }

  public static debug(message: string): void {
    const wrappedMessage = Logger.#addHeaderToMessage(message)
    core.debug(wrappedMessage)
  }

  public static info(message: string): void {
    const wrappedMessage = Logger.#addHeaderToMessage(message)
    core.info(wrappedMessage)
  }

  public static error(message: string | Error): void {
    if (message instanceof String || typeof message === 'string') {
      const wrappedMessage = Logger.#addHeaderToMessage(message as string)
      core.error(wrappedMessage)
    } else {
      const wrappedMessage = Logger.#addHeaderToMessage((message as Error).name)
      core.error(wrappedMessage)
      core.error(message as Error)
    }
  }
}
