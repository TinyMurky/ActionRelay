import { DateTime } from '@/utils/times/dateTime.js'

export class StartTime extends DateTime {
  private constructor(date: Readonly<string | Date>) {
    super(date)
  }

  public static fromDate(date: Readonly<Date>): StartTime {
    return new StartTime(date)
  }

  public static fromISOString(date: Readonly<string>): StartTime {
    return new StartTime(date)
  }
}
