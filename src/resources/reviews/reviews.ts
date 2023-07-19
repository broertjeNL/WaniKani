import { cleanParams } from '../../utils';
import { ReviewCreateParams, ReviewParams, ReviewsCollectionResponse, ReviewsResourceResponse } from './types';
import { AxiosInstance } from 'axios';

/**
 * Reviews log all the correct and incorrect answers provided through the 'Reviews' section of WaniKani. Review records are created when a user answers all the parts of a subject correctly once; some subjects have both meaning or reading parts, and some only have one or the other. Note that reviews are not created for the quizzes in lessons.
 */
export class Reviews {
    wanikaniClient: AxiosInstance;

    constructor(wanikaniClient: AxiosInstance) {
        this.wanikaniClient = wanikaniClient;
    }

    /**
     * Returns a collection of all reviews, ordered by ascending created_at, 1000 at a time.
     * @param {ReviewParams} params - The collection of reviews will be filtered on the parameters provided.
     */
    public async getAll(params?: ReviewParams) {
        const { data } = await this.wanikaniClient<ReviewsCollectionResponse>('reviews', {
            ...(params && { params: cleanParams(params) }),
        });
        return data;
    }

    /**
     * Retrieves a specific review by its id.
     * @param {number} id - Unique identifier of the review.
     */
    public async get(id: number) {
        const { data } = await this.wanikaniClient<ReviewsResourceResponse>(`reviews/${id}`);
        return data;
    }

    /**
     * Creates a review for a specific assignment_id. Using the related subject_id is also a valid alternative to using assignment_id.
     *
     * Some criteria must be met in order for a review to be created: available_at must be not null and in the past.
     *
     * When a review is registered, the associated assignment and review_statistic are both updated. These are returned in the response body under resources_updated.
     * @param {ReviewCreateParams} params
     */
    public async create(params: ReviewCreateParams) {
        const { data } = await this.wanikaniClient.post<ReviewsResourceResponse>('reviews');
        return data;
    }
}
