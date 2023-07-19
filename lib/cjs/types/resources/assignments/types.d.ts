import { SubjectType } from '../subjects';
import { CollectionApiResponse, ResourceApiResponse } from '../../services';
export type AssignmentCollectionResponse = CollectionApiResponse<AssignmentResourceResponse>;
export type AssignmentResourceResponse = ResourceApiResponse<Assignment, 'assignment'>;
/**
 * Assignment Data Structure
 */
export interface Assignment {
    /**
     * Timestamp when the related subject will be available in the user's review queue.
     */
    available_at?: Date;
    /**
     * Timestamp when the user reaches SRS stage 9 the first time.
     */
    burned_at?: Date;
    /**
     * Timestamp when the assignment was created.
     */
    created_at: Date;
    /**
     * Indicates if the associated subject has been hidden, preventing it from appearing in lessons or reviews.
     */
    hidden: boolean;
    /**
     * Timestamp when the user reaches SRS stage 5 for the first time.
     */
    passed_at?: Date;
    /**
     * Timestamp when the subject is resurrected and placed back in the user's review queue.
     */
    resurrected_at?: Date;
    /**
     * The current {@link SpacedRepetitionSystem|SRS stage interval}. The interval range is determined by the related {@link Subject|subject's} {@link SpacedRepetitionSystem|spaced repetition system}.
     */
    srs_stage: number;
    /**
     * Timestamp when the user completes the lesson for the related subject.
     */
    started_at?: Date;
    /**
     * Unique identifier of the associated {@link Subject|subject}.
     */
    subject_id: number;
    /**
     * The type of the associated {@link Subject|subject}, one of: kana_vocabulary, kanji, radical, or vocabulary.
     */
    subject_type: SubjectType;
    /**
     * The timestamp when the related subject has its prerequisites satisfied and is made available in lessons.
     *
     * Prerequisites are:
     *
     * - The subject components have reached SRS stage 5 once (they have been “passed”).
     * - The user's level is equal to or greater than the level of the assignment’s subject.
     */
    unlocked_at?: Date;
}
/**
 * The parameters the collection of assignments can be filtered on.
 */
export interface AssignmentParams {
    /**
     * Only assignments available at or after this time are returned.
     */
    available_after?: Date;
    /**
     * Only assignments available at or before this time are returned.
     */
    available_before?: Date;
    /**
     * When set to true, returns assignments that have a value in data.burned_at. Returns assignments with a null data.burned_at if false.
     */
    burned?: boolean;
    /**
     * Return assignments with a matching value in the hidden attribute
     */
    hidden?: boolean;
    /**
     * Only assignments where data.id matches one of the array values are returned.
     */
    ids?: number[];
    /**
     * Returns assignments which are immediately available for lessons
     */
    immediately_available_for_lessons?: boolean;
    /**
     * Returns assignments which are immediately available for review
     */
    immediately_available_for_review?: boolean;
    /**
     * Returns assignments which are in the review state
     */
    in_review?: boolean;
    /**
     * Only assignments where the associated subject level matches one of the array values are returned. Valid values range from 1 to 60.
     */
    levels?: number[];
    /**
     * Only assignments where data.srs_stage matches one of the array values are returned. Valid values range from 0 to 9
     */
    srs_stages?: number[];
    /**
     * When set to true, returns assignments that have a value in data.started_at. Returns assignments with a null data.started_at if false.
     */
    started?: boolean;
    /**
     * Only assignments where data.subject_id matches one of the array values are returned.
     */
    subject_ids?: number[];
    /**
     * Only assignments where data.subject_type matches one of the array values are returned. Valid values are: kana_vocabulary, kanji, radical, or vocabulary.
     */
    subject_types?: SubjectType[];
    /**
     * When set to true, returns assignments that have a value in data.unlocked_at. Returns assignments with a null data.unlocked_at if false.
     */
    unlocked?: boolean;
    /**
     * Only assignments updated after this time are returned.
     */
    updated_after?: Date;
}
export interface AssignmentStartParams {
    /**
     * Allowed parameters for marking an assignment as started
     *
     * Notes:
     *
     * - If not set, started_at will default to the time the request is made.
     * - started_at must be greater than or equal to unlocked_at.
     */
    started_at?: Date;
}
//# sourceMappingURL=types.d.ts.map