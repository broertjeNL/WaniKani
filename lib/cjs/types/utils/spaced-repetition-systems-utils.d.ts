import { IntervalUnit, Stage } from '../resources';
/**
 * Map for converting {@link IntervalUnit|interval units} to seconds.
 */
export declare const intervalMultipliers: Record<IntervalUnit, number>;
/**
 * Converts stage to time interval in seconds.
 * @param {Stage} stage
 */
export declare const getIntervalInSeconds: (stage: Stage) => number;
//# sourceMappingURL=spaced-repetition-systems-utils.d.ts.map