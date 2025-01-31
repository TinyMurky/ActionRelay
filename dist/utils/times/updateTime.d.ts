import DateTime from '@/utils/times/dateTime.js';
export default class UpdateTime extends DateTime {
    private constructor();
    static fromDate(date: Readonly<Date>): UpdateTime;
    static fromISOString(date: Readonly<string>): UpdateTime;
}
