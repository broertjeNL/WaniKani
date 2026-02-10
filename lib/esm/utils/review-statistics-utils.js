/**
 * Calculate percentage of correctly answered review questions
 * @param {ReviewStatisticsData} reviewStatistic
 */
export const calculatePercentageCorrect = (reviewStatistic) => {
    const { meaning_correct, reading_correct } = reviewStatistic;
    const totalCorrect = meaning_correct + reading_correct;
    const totalTries = Object.values(reviewStatistic).reduce((acc, curr) => acc + curr, 0);
    if (totalTries === 0)
        return 0;
    return Math.round((totalCorrect / totalTries) * 100);
};
