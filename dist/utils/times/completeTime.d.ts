import DateTime from '@/utils/times/dateTime.js';
import StartTime from '@/utils/times/startTime.js';
export default class CompleteTime extends DateTime {
    private constructor();
    static fromDate(date: Readonly<Date>): CompleteTime;
    static fromISOString(date: Readonly<string>): CompleteTime;
    /**
     * Info: (20250116 - Murky)
     * Calculate millisecond from start to complete
     */
    timeElapsedSinceStart(startTime: Readonly<StartTime>): number;
}
