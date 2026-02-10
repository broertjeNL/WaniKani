"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const review_statistics_utils_1 = require("./review-statistics-utils");
describe('review-statistics-utils', () => {
    describe('calculatePercentageCorrect', () => {
        it.each `
            input                                                                                     | result
            ${{ meaning_correct: 1, reading_correct: 1, meaning_incorrect: 0, reading_incorrect: 0 }} | ${100}
            ${{ meaning_correct: 1, reading_correct: 0, meaning_incorrect: 0, reading_incorrect: 0 }} | ${100}
            ${{ meaning_correct: 0, reading_correct: 1, meaning_incorrect: 0, reading_incorrect: 0 }} | ${100}
            ${{ meaning_correct: 1, reading_correct: 1, meaning_incorrect: 1, reading_incorrect: 0 }} | ${67}
            ${{ meaning_correct: 1, reading_correct: 1, meaning_incorrect: 0, reading_incorrect: 1 }} | ${67}
            ${{ meaning_correct: 1, reading_correct: 1, meaning_incorrect: 1, reading_incorrect: 1 }} | ${50}
            ${{ meaning_correct: 1, reading_correct: 0, meaning_incorrect: 1, reading_incorrect: 0 }} | ${50}
            ${{ meaning_correct: 1, reading_correct: 0, meaning_incorrect: 0, reading_incorrect: 1 }} | ${50}
            ${{ meaning_correct: 0, reading_correct: 1, meaning_incorrect: 1, reading_incorrect: 0 }} | ${50}
            ${{ meaning_correct: 0, reading_correct: 1, meaning_incorrect: 0, reading_incorrect: 1 }} | ${50}
            ${{ meaning_correct: 1, reading_correct: 0, meaning_incorrect: 1, reading_incorrect: 1 }} | ${33}
            ${{ meaning_correct: 0, reading_correct: 1, meaning_incorrect: 1, reading_incorrect: 1 }} | ${33}
            ${{ meaning_correct: 0, reading_correct: 0, meaning_incorrect: 1, reading_incorrect: 1 }} | ${0}
            ${{ meaning_correct: 0, reading_correct: 0, meaning_incorrect: 1, reading_incorrect: 0 }} | ${0}
            ${{ meaning_correct: 0, reading_correct: 0, meaning_incorrect: 0, reading_incorrect: 1 }} | ${0}
            ${{ meaning_correct: 0, reading_correct: 0, meaning_incorrect: 0, reading_incorrect: 0 }} | ${0}
        `('should return $result % given $input', ({ input, result }) => {
            expect((0, review_statistics_utils_1.calculatePercentageCorrect)(input)).toBe(result);
        });
    });
});
