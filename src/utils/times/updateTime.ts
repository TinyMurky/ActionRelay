import DateTime from '@/utils/times/dateTime.js'

export default class UpdateTime extends DateTime {
  private constructor(date: Readonly<string | Date>) {
    super(date)
  }

  public static fromDate(date: Readonly<Date>): UpdateTime {
    return new UpdateTime(date)
  }

  public static fromISOString(date: Readonly<string>): UpdateTime {
    return new UpdateTime(date)
  }
}
