import { SubjectType } from '../subjects';
import { CollectionApiResponse, ResourceApiResponse } from '../../services';
export type ReviewStatisticsCollectionResponse = CollectionApiResponse<ReviewStatisticsResourceResponse>;
export type ReviewStatisticsResourceResponse = ResourceApiResponse<ReviewStatisticsData, 'review_statistic'>;
/**
 * Review Statistic Data Structure
 */
export interface ReviewStatisticsData {
    /**
     * Timestamp when the review statistic was created.
     */
    created_at: Date;
    /**
     * 	Indicates if the associated subject has been hidden, preventing it from appearing in lessons or reviews.
     */
    hidden: boolean;
    /**
     * Total number of correct answers submitted for the meaning of the associated subject.
     */
    meaning_correct: number;
    /**
     * The current, uninterrupted series of correct answers given for the meaning of the associated subject.
     */
    meaning_current_streak: number;
    /**
     * Total number of incorrect answers submitted for the meaning of the associated subject.
     */
    meaning_incorrect: number;
    /**
     * The longest, uninterrupted series of correct answers ever given for the meaning of the associated subject.
     */
    meaning_max_streak: number;
    /**
     * 	The overall correct answer rate by the user for the subject, including both meaning and reading.
     */
    percentage_correct: number;
    /**
     * Total number of correct answers submitted for the reading of the associated subject.
     */
    reading_correct: number;
    /**
     * The current, uninterrupted series of correct answers given for the reading of the associated subject.
     */
    reading_current_streak: number;
    /**
     * Total number of incorrect answers submitted for the reading of the associated subject.
     */
    reading_incorrect: number;
    /**
     * The longest, uninterrupted series of correct answers ever given for the reading of the associated subject.
     */
    reading_max_streak: number;
    /**
     * Unique identifier of the associated {@link Subjects|subject}.
     */
    subject_id: number;
    /**
     * The type of the associated {@link Subjects|subject}, one of: kana_vocabulary, kanji, radical, or vocabulary.
     */
    subject_type: SubjectType;
}
/**
 * The collection of review statistics will be filtered on the parameters provided.
 */
export interface ReviewStatisticsParams {
    /**
     * Return review statistics with a matching value in the hidden attribute
     */
    hidden?: boolean;
    /**
     * Only review statistics where data.id matches one of the array values are returned.
     */
    ids?: number;
    /**
     * Return review statistics where the percentage_correct is greater than the value.
     */
    percentages_greater_than?: number;
    /**
     * Return review statistics where the percentage_correct is less than the value.
     */
    percentages_less_than?: number;
    /**
     * Only review statistics where data.subject_id matches one of the array values are returned.
     */
    subject_ids?: number[];
    /**
     * Only review statistics where data.subject_type matches one of the array values are returned. Valid values are: kana_vocabulary, kanji, radical, or vocabulary.
     */
    subject_types?: SubjectType[];
    /**
     * Only review statistics updated after this time are returned.
     */
    updated_after?: Date;
}
//# sourceMappingURL=types.d.ts.map