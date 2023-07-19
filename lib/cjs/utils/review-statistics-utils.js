"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePercentageCorrect = void 0;
/**
 * Calculate percentage of correctly answered review questions
 * @param {ReviewStatisticsData} reviewStatistic
 */
const calculatePercentageCorrect = (reviewStatistic) => {
    const { meaning_correct, reading_correct, meaning_incorrect, reading_incorrect } = reviewStatistic;
    return (((meaning_correct + reading_correct) /
        (meaning_correct + reading_correct + meaning_incorrect + reading_incorrect)) *
        100);
};
exports.calculatePercentageCorrect = calculatePercentageCorrect;
