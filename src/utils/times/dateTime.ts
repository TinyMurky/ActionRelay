export default class DateTime {
  readonly date: Date

  constructor(date: Readonly<string | Date>) {
    if (date instanceof Date) {
      this.#assertValidDate(date)
      this.date = new Date(date) // copy an new date
    } else if (typeof date === 'string') {
      this.#assertValidISOString(date) // can only allow using ISO string
      this.date = new Date(date)
    } else {
      throw new Error(`DateTime must be initialized by a string or Date`)
    }
  }

  public static fromDate(date: Readonly<Date>) {
    return new DateTime(date)
  }

  public static fromISOString(date: Readonly<string>) {
    return new DateTime(date)
  }

  /**
   * Info: (20250116 - Murky)
   * Get timestamp in millisecond
   */
  get timestamp(): number {
    return this.date.getTime()
  }

  /**
   * Info: (20250116 - Murky)
   * Javascript date can input random string and still create Date,
   * but that date is invalid date,
   * it can be check by getTime is number
   */
  #isValidDate(date: Readonly<Date>) {
    const isDateValid = !isNaN(date.getTime())
    return isDateValid
  }

  /**
   * Validates that the given Date instance is valid.
   */
  #assertValidDate(date: Readonly<Date>): void {
    if (!this.#isValidDate(date)) {
      throw new Error(`Invalid Date instance provided: ${date}`)
    }
  }

  /**
   * Validates that the given string is a valid ISO date string.
   */
  #assertValidISOString(isoDateString: Readonly<string>): void {
    const parsedDate = new Date(isoDateString)

    if (!this.#isValidDate(parsedDate)) {
      throw new Error(`Invalid ISO date string provided: ${isoDateString}`)
    }

    const normalizedIsoData = this.#normalizeISOString(isoDateString)

    const normalizedParsedData = this.#normalizeISOString(
      parsedDate.toISOString()
    )

    if (normalizedIsoData !== normalizedParsedData) {
      throw new Error(`Invalid ISO date string provided: ${isoDateString}`)
    }
  }

  /**
   * Normalize an ISO date string by removing the millisecond part if present.
   * Since the ISO string provide by github is like 2025-01-15T11:04:32Z
   */
  #normalizeISOString(isoDateString: Readonly<string>): string {
    return isoDateString.replace(/\.\d{1,3}Z$/, 'Z')
  }
}
