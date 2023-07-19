import { cleanParams } from '../../utils';
import { ReviewStatisticsCollectionResponse, ReviewStatisticsParams, ReviewStatisticsResourceResponse } from './types';
import { AxiosInstance } from 'axios';

/**
 * Review statistics summarize the activity recorded in {@link Reviews|reviews}. They contain sum the number of correct and incorrect answers for both meaning and reading. They track current and maximum streaks of correct answers. They store the overall percentage of correct answers versus total answers.
 *
 * A review statistic is created when the user has done their first review on the related subject.
 */
export class ReviewStatistics {
    wanikaniClient: AxiosInstance;

    constructor(wanikaniClient: AxiosInstance) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all review statistics, ordered by ascending created_at, 500 at a time.
     * @param {ReviewStatisticsParams} params - The collection of review statistics will be filtered on the parameters provided.
     */
    public async getAll(params?: ReviewStatisticsParams) {
        const { data } = await this.wanikaniClient<ReviewStatisticsCollectionResponse>('review_statistics', {
            ...(params && { params: cleanParams(params) }),
        });
        return data;
    }

    /**
     * Retrieves a specific review statistic by its id.
     * @param {number} id - Unique identifier of the review_statistic.
     */
    public async get(id: number) {
        const { data } = await this.wanikaniClient<ReviewStatisticsResourceResponse>(`review_statistics/${id}`);
        return data;
    }
}
