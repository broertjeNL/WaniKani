import { IntervalUnit, SpacedRepetitionSystem, Stage } from '../resources';
/**
 * Calculates how much time is left until the next {@link Reviews|Reviews}
 * @param {SpacedRepetitionSystem} srs_stage
 * @param {number} srs
 */
export declare const calculateSrsTimeLeft: (srs_stage: number | undefined, srs: SpacedRepetitionSystem) => number;
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