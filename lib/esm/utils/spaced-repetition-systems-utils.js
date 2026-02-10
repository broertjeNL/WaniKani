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
    months: 60 * 60 * 24 * 7 * 4,
};
/**
 * Converts stage to time interval in seconds.
 * @param {Stage} stage
 */
export const getIntervalInSeconds = (stage) => {
    const { interval, interval_unit } = stage;
    if (!interval || !interval_unit)
        return 0;
    return interval * intervalMultipliers[interval_unit];
};
