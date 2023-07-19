"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIntervalInSeconds = exports.intervalMultipliers = exports.calculateSrsTimeLeft = void 0;
/**
 * Calculates how much time is left until the next {@link Reviews|Reviews}
 * @param {SpacedRepetitionSystem} srs_stage
 * @param {number} srs
 */
const calculateSrsTimeLeft = (srs_stage = 0, srs) => {
    let timeLeft = 0;
    for (let i = srs_stage; i <= srs.passing_stage_position; i++) {
        const stage = srs.stages[i];
        timeLeft += (0, exports.getIntervalInSeconds)(stage);
    }
    return timeLeft;
};
exports.calculateSrsTimeLeft = calculateSrsTimeLeft;
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
};
/**
 * Converts stage to time interval in seconds.
 * @param {Stage} stage
 */
const getIntervalInSeconds = (stage) => {
    if (!stage.interval || !stage.interval_unit)
        return 0;
    return stage.interval * exports.intervalMultipliers[stage.interval_unit];
};
exports.getIntervalInSeconds = getIntervalInSeconds;
