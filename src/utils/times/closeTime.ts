import DateTime from '@/utils/times/dateTime.js'

export default class CloseTime extends DateTime {
  private constructor(date: Readonly<string | Date>) {
    super(date)
  }

  public static fromDate(date: Readonly<Date>): CloseTime {
    return new CloseTime(date)
  }

  public static fromISOString(date: Readonly<string>): CloseTime {
    return new CloseTime(date)
  }
}
