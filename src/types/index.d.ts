declare module '@mermaid-js/mermaid-cli' {
  export function run(
    input: `${string}.${'md' | 'markdown'}` | string | undefined,
    output:
      | `${string}.${'md' | 'markdown' | 'svg' | 'png' | 'pdf'}`
      | '/dev/stdout',
    {
      puppeteerConfig,
      quiet,
      outputFormat,
      parseMMDOptions
    }?: {
      puppeteerConfig?: puppeteer.LaunchOptions | undefined
      quiet?: boolean | undefined
      outputFormat?: 'svg' | 'png' | 'pdf' | undefined
      parseMMDOptions?: ParseMDDOptions | undefined
    }
  ): Promise<void>
}
