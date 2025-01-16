import { DateTime } from '@/utils/times/dateTime.js'
import { StartTime } from './startTime.js'

export class CompleteTime extends DateTime {
  private constructor(date: Readonly<string | Date>) {
    super(date)
  }

  public static fromDate(date: Readonly<Date>): CompleteTime {
    return new CompleteTime(date)
  }

  public static fromISOString(date: Readonly<string>): CompleteTime {
    return new CompleteTime(date)
  }

  /**
   * Info: (20250116 - Murky)
   * Calculate millisecond from start to complete
   */
  public timeElapsedSinceStart(startTime: Readonly<StartTime>): number {
    const millisecondParsedFromStart = this.timestamp - startTime.timestamp

    if (millisecondParsedFromStart < 0) {
      throw new Error('CompleteTime should be later than StartTime')
    }

    return millisecondParsedFromStart
  }
}
