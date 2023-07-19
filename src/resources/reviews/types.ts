import { CollectionApiResponse, ResourceApiResponse } from '../../services';

export type ReviewsCollectionResponse = CollectionApiResponse<ReviewsResourceResponse>;
export type ReviewsResourceResponse = ResourceApiResponse<ReviewData, 'review'>;

/**
 * Review Data Structure
 */
export interface ReviewData {
    /**
     * Unique identifier of the associated {@link Assignments|assignment}.
     */
    assignment_id: number;
    /**
     * Timestamp when the review was created.
     */
    created_at: Date;
    /**
     * The SRS stage interval calculated from the number of correct and incorrect answers, with valid values ranging from 1 to 9
     */
    ending_srs_stage: number;
    /**
     * The number of times the user has answered the meaning incorrectly.
     */
    incorrect_meaning_answers: number;
    /**
     * The number of times the user has answered the reading incorrectly.
     */
    incorrect_reading_answers: number;
    /**
     * Unique identifier of the associated {@link SpacedRepetitionSystems|spaced_repetition_system}.
     */
    spaced_repetition_system_id: number;
    /**
     * The starting SRS stage interval, with valid values ranging from 1 to 8
     */
    starting_srs_stage: number;
    /**
     * Unique identifier of the associated {@link Subjects|subject}.
     */
    subject_id: number;
}

export interface ReviewParams {
    /**
     * Only reviews where data.assignment_id matches one of the array values are returned.
     */
    assignment_ids?: number[];
    /**
     * Only reviews where data.id matches one of the array values are returned.
     */
    ids?: number[];
    /**
     * Only reviews where data.subject_id matches one of the array values are returned.
     */
    subject_ids?: number[];
    /**
     * Only reviews updated after this time are returned.
     */
    updated_after?: Date;
}

export interface ReviewCreateParams {
    /**
     * Unique identifier of the assignment. This or subject_id must be set.
     */
    assignment_id: number;
    /**
     * Unique identifier of the subject. This or assignment_id must be set.
     */
    subject_id: number;
    /**
     * Must be zero or a positive number. This is the number of times the meaning was answered incorrectly.
     */
    incorrect_meaning_answers: number;
    /**
     * Must be zero or a positive number. This is the number of times the reading was answered incorrectly. Note that subjects with a type or radical do not quiz on readings. Thus, set this value to 0.
     */
    incorrect_reading_answers: number;
    /**
     * Timestamp when the review was completed. Defaults to the time of the request if omitted from the request body. Must be in the past, but after assignment.available_at.
     */
    created_at?: Date;
}
