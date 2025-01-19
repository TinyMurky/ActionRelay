import DateTime from '@/utils/times/dateTime.js';
export default class CreateTime extends DateTime {
    private constructor();
    static fromDate(date: Readonly<Date>): CreateTime;
    static fromISOString(date: Readonly<string>): CreateTime;
}
