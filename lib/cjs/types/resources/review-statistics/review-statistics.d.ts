import { ReviewStatisticsCollectionResponse, ReviewStatisticsParams, ReviewStatisticsResourceResponse } from './types';
import { AxiosInstance } from 'axios';
/**
 * Review statistics summarize the activity recorded in {@link Reviews|reviews}. They contain sum the number of correct and incorrect answers for both meaning and reading. They track current and maximum streaks of correct answers. They store the overall percentage of correct answers versus total answers.
 *
 * A review statistic is created when the user has done their first review on the related subject.
 */
export declare class ReviewStatistics {
    private wanikaniClient;
    constructor(wanikaniClient: AxiosInstance);
    /**
     * Returns a collection of all review statistics, ordered by ascending created_at, 500 at a time.
     * @param {ReviewStatisticsParams} params - The collection of review statistics will be filtered on the parameters provided.
     */
    getAll(params?: ReviewStatisticsParams): Promise<ReviewStatisticsCollectionResponse>;
    /**
     * Retrieves a specific review statistic by its id.
     * @param {number} id - Unique identifier of the review_statistic.
     */
    get(id: number): Promise<ReviewStatisticsResourceResponse>;
}
//# sourceMappingURL=review-statistics.d.ts.map