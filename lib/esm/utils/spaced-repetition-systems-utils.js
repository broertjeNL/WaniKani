"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntervalInSeconds = exports.intervalMultipliers = void 0;
/**
 * Map for converting {@link IntervalUnit|interval units} to seconds.
 */
exports.intervalMultipliers = {
    milliseconds: 0.001,
    seconds: 1,
    minutes: 60,
    hours: 60 * 60,
    days: 60 * 60 * 24,
    weeks: 60 * 60 * 24 * 7,
    months: 60 * 60 * 24 * 7 * 4,
};
/**
 * Converts stage to time interval in seconds.
 * @param {Stage} stage
 */
const getIntervalInSeconds = (stage) => {
    const { interval, interval_unit } = stage;
    if (!interval || !interval_unit)
        return 0;
    return interval * exports.intervalMultipliers[interval_unit];
};
exports.getIntervalInSeconds = getIntervalInSeconds;
