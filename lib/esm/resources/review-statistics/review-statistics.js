"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewStatistics = void 0;
const utils_1 = require("../../utils");
/**
 * Review statistics summarize the activity recorded in {@link Reviews|reviews}. They contain sum the number of correct and incorrect answers for both meaning and reading. They track current and maximum streaks of correct answers. They store the overall percentage of correct answers versus total answers.
 *
 * A review statistic is created when the user has done their first review on the related subject.
 */
class ReviewStatistics {
    wanikaniClient;
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all review statistics, ordered by ascending created_at, 500 at a time.
     * @param {ReviewStatisticsParams} params - The collection of review statistics will be filtered on the parameters provided.
     */
    async getAll(params) {
        const { data } = await this.wanikaniClient('review_statistics', {
            ...(params && { params: (0, utils_1.cleanParams)(params) }),
        });
        return data;
    }
    /**
     * Retrieves a specific review statistic by its id.
     * @param {number} id - Unique identifier of the review_statistic.
     */
    async get(id) {
        const { data } = await this.wanikaniClient(`review_statistics/${id}`);
        return data;
    }
}
exports.ReviewStatistics = ReviewStatistics;
