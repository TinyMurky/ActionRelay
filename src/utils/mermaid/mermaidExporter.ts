// import { run } from '../../../node_modules/@mermaid-js/mermaid-cli/src/index.js'
// import type { run as runType } from '../../../node_modules/@mermaid-js/mermaid-cli/dist-types/src/cli.js'
import { run } from '@mermaid-js/mermaid-cli'

import path from 'path'

export default class MermaidExporter {
  static readonly mermaidConfig = {
    parseMMDOptions: {
      backgroundColor: 'white',

      mermaidConfig: {
        theme: 'default',
        gantt: {
          leftPadding: 150,
          barGap: 10,
          topPadding: 50,
          rightPadding: 50
        }
      }
    }
  } as const

  public static async exportToImage(
    args: Readonly<{
      mermaidMMDFilePath: string
      outputPath: string
    }>
  ): Promise<void> {
    const { mermaidMMDFilePath, outputPath } = args
    // Info: (20250117 - Murky) Force to use svg end
    const outputPathExt = path.extname(outputPath)
    if (outputPathExt) {
      outputPath.split('.').slice(0, -1).join('.')
    }

    // Info: (20250117 - Murky) this is async function
    run(mermaidMMDFilePath, `${outputPath}.svg`, MermaidExporter.mermaidConfig)
  }
}
