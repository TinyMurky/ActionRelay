import DateTime from '@/utils/times/dateTime.js';
export default class CloseTime extends DateTime {
    private constructor();
    static fromDate(date: Readonly<Date>): CloseTime;
    static fromISOString(date: Readonly<string>): CloseTime;
}
