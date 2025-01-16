export declare class DateTime {
    #private;
    readonly date: Date;
    constructor(date: Readonly<string | Date>);
    static fromDate(date: Readonly<Date>): DateTime;
    static fromISOString(date: Readonly<string>): DateTime;
    /**
     * Info: (20250116 - Murky)
     * Get timestamp in millisecond
     */
    get timestamp(): number;
}
