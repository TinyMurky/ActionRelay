export default class FileSystem {
    private static readonly CONFIG;
    static get rootFolder(): string;
    static get outputFolder(): string;
    /**
     * Make sure folder path exist, create new folder if not exist
     * @param folderPath the folder need to be check if existed
     */
    static ensureFolderExists(folderPath: Readonly<string>): void;
    static initOutputFolder(): void;
    /**
     * join file name after outputFolder
     * @param fileName the fileName that will be joint after output folder
     * @returns full outputFolder plus fileName
     */
    static getOutputFilePath(fileName: Readonly<string>): string;
    /**
     * create or used existed
     * @param folderName custom folder inside root
     */
    static initCustomFolder(folderName: Readonly<string>): void;
    /**
     * @param filePath it need to be full path, not only filename
     * @param data string that will be store in the [filePath]
     */
    static writeFileSync(filePath: Readonly<string>, data: Readonly<string>): void;
    /**
     * Write to output folder and te fileName is [filename]
     * @param filePath only fileName, it wil be join with output path
     * @param data string that will be store in the [filePath]
     */
    static writeToOutputFolder(fileName: Readonly<string>, data: Readonly<string>): string;
}
