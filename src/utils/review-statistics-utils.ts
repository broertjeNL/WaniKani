import { ReviewStatisticsData } from '../resources';

/**
 * Calculate percentage of correctly answered review questions
 * @param {ReviewStatisticsData} reviewStatistic
 */
export const calculatePercentageCorrect = (reviewStatistic: ReviewStatisticsData) => {
    const { meaning_correct, reading_correct, meaning_incorrect, reading_incorrect } = reviewStatistic;
    return (
        ((meaning_correct + reading_correct) /
            (meaning_correct + reading_correct + meaning_incorrect + reading_incorrect)) *
        100
    );
};
