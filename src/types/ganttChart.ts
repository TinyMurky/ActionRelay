/**
 * Info: (20250116 - Murky)
 * Tag that provide by [Mermaid Gnatt Syntax](https://mermaid.js.org/syntax/gantt.html)
 * @prop [empty] - This tag is not provided by Mermaid, must be transform into empty string
 */
export enum GanttChartTaskTag {
  active,
  done,
  crit,
  milestone,

  /**
   * Info: (20250116 - Murky)
   * This tag is not provided by Mermaid, must be transform into empty string
   */
  empty
}
