import DateTime from '@/utils/times/dateTime.js';
export default class StartTime extends DateTime {
    private constructor();
    static fromDate(date: Readonly<Date>): StartTime;
    static fromISOString(date: Readonly<string>): StartTime;
}
