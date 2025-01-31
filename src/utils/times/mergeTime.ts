import DateTime from '@/utils/times/dateTime.js'

export default class MergeTime extends DateTime {
  private constructor(date: Readonly<string | Date>) {
    super(date)
  }

  public static fromDate(date: Readonly<Date>): MergeTime {
    return new MergeTime(date)
  }

  public static fromISOString(date: Readonly<string>): MergeTime {
    return new MergeTime(date)
  }
}
