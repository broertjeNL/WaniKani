/**
 * Calculates how much time is left until the next {@link Reviews|Reviews}
 * @param {SpacedRepetitionSystem} srs_stage
 * @param {number} srs
 */
export const calculateSrsTimeLeft = (srs_stage = 0, srs) => {
    let timeLeft = 0;
    for (let i = srs_stage; i <= srs.passing_stage_position; i++) {
        const stage = srs.stages[i];
        timeLeft += getIntervalInSeconds(stage);
    }
    return timeLeft;
};
/**
 * Map for converting {@link IntervalUnit|interval units} to seconds.
 */
export const intervalMultipliers = {
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
export const getIntervalInSeconds = (stage) => {
    if (!stage.interval || !stage.interval_unit)
        return 0;
    return stage.interval * intervalMultipliers[stage.interval_unit];
};
