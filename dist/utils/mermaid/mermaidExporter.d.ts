export default class MermaidExporter {
    static readonly mermaidConfig: {
        readonly parseMMDOptions: {
            readonly backgroundColor: "white";
            readonly mermaidConfig: {
                readonly theme: "default";
                readonly gantt: {
                    readonly leftPadding: 150;
                    readonly barGap: 10;
                    readonly topPadding: 50;
                    readonly rightPadding: 50;
                };
            };
        };
    };
    static exportToImage(args: Readonly<{
        mermaidMMDFilePath: string;
        outputPath: string;
    }>): Promise<void>;
}
