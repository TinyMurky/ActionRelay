export default class Compressor {
    static compress(args: Readonly<{
        inputFileUrl: string;
        zipSaveUrl: string;
    }>): Promise<string>;
}
