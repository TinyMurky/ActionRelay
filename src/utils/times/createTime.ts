import { DateTime } from '@/utils/times/dateTime.js'

export class CreateTime extends DateTime {
  private constructor(date: Readonly<string | Date>) {
    super(date)
  }

  public static fromDate(date: Readonly<Date>): CreateTime {
    return new CreateTime(date)
  }

  public static fromISOString(date: Readonly<string>): CreateTime {
    return new CreateTime(date)
  }
}
