import { DateTime } from '@/utils/times/dateTime.js';
import { StartTime } from './startTime.js';
export declare class CompleteTime extends DateTime {
    private constructor();
    static fromDate(date: Readonly<Date>): CompleteTime;
    static fromISOString(date: Readonly<string>): CompleteTime;
    /**
     * Info: (20250116 - Murky)
     * Calculate millisecond from start to complete
     */
    timeElapsedSinceStart(startTime: Readonly<StartTime>): number;
}
