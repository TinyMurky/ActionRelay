import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import Logger from '@/utils/logger.js'

export default class FileSystem {
  private static readonly CONFIG = {
    ROOT_FOLDER: path.join(fileURLToPath(import.meta.url), '../../../'),
    OUTPUT_FOLDER: 'output'
  }

  static get rootFolder(): string {
    return this.CONFIG.ROOT_FOLDER
  }

  static get outputFolder(): string {
    return path.join(this.rootFolder, this.CONFIG.OUTPUT_FOLDER)
  }

  /**
   * Make sure folder path exist, create new folder if not exist
   * @param folderPath the folder need to be check if existed
   */
  static ensureFolderExists(folderPath: Readonly<string>): void {
    try {
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true })
        Logger.info(`Folder created: ${folderPath}`)
      } else {
        Logger.info(`Folder already exists: ${folderPath}`)
      }
    } catch (_error) {
      const error = _error as Error
      Logger.error(
        `Failed to ensure folder exists: ${folderPath}, error is below:`
      )
      Logger.error(error)

      throw error
    }
  }

  static initOutputFolder(): void {
    this.ensureFolderExists(this.outputFolder)
  }

  /**
   * join file name after outputFolder
   * @param fileName the fileName that will be joint after output folder
   * @returns full outputFolder plus fileName
   */
  static getOutputFilePath(fileName: Readonly<string>): string {
    return path.join(this.outputFolder, fileName)
  }

  /**
   * create or used existed
   * @param folderName custom folder inside root
   */
  static initCustomFolder(folderName: Readonly<string>): void {
    const customFolderPath = path.join(this.rootFolder, folderName)
    this.ensureFolderExists(customFolderPath)
  }

  /**
   * @param filePath it need to be full path, not only filename
   * @param data string that will be store in the [filePath]
   */
  static writeFileSync(filePath: Readonly<string>, data: Readonly<string>) {
    fs.writeFileSync(filePath, data)
  }

  /**
   * Write to output folder and te fileName is [filename]
   * @param filePath only fileName, it wil be join with output path
   * @param data string that will be store in the [filePath]
   */
  static writeToOutputFolder(
    fileName: Readonly<string>,
    data: Readonly<string>
  ) {
    const outputPath = FileSystem.getOutputFilePath(fileName)
    FileSystem.writeFileSync(outputPath, data)
    return outputPath
  }
}
