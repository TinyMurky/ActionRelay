import DateTime from '@/utils/times/dateTime.js';
export default class MergeTime extends DateTime {
    private constructor();
    static fromDate(date: Readonly<Date>): MergeTime;
    static fromISOString(date: Readonly<string>): MergeTime;
}
