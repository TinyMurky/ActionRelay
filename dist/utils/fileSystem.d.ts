export default class FileSystem {
    private static readonly CONFIG;
    static get rootFolder(): string;
    static get downloadFolder(): string;
    /**
     * Make sure folder path exist, create new folder if not exist
     * @param folderPath the folder need to be check if existed
     */
    static ensureFolderExists(folderPath: Readonly<string>): void;
    static initDownloadFolder(): void;
    /**
     * join file name after downloadFolder
     * @param fileName the fileName that will be joint after download folder
     * @returns full downloadFolder plus fileName
     */
    static getDownloadFilePath(fileName: Readonly<string>): string;
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
     * Write to download folder and te fileName is [filename]
     * @param filePath only fileName, it wil be join with download path
     * @param data string that will be store in the [filePath]
     */
    static writeToDownloadFolder(fileName: Readonly<string>, data: Readonly<string>): string;
}
