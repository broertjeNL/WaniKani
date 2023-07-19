import { ApiResponse } from '../../services';
export type SummaryResponse = ApiResponse<SummaryData, 'report'>;
/**
 * Summary Data Structure
 * */
export interface SummaryData {
    /**
     * Details about subjects available for lessons. See table below for object structure.
     */
    lessons: Lesson[];
    /**
     * Earliest date when the reviews are available. Is null when the user has no reviews scheduled.
     */
    next_reviews_at: Date;
    /**
     * Details about subjects available for reviews now and in the next 24 hours by the hour (total of 25 objects). See table below for object structure.
     */
    reviews: Review[];
}
/**
 * Lesson Object Attributes
 */
export interface Lesson {
    /**
     * When the paired subject_ids are available for lessons. Always beginning of the current hour when the API endpoint is accessed.
     */
    available_at: Date;
    /**
     * Collection of unique identifiers for {@link Subjects|subjects}.
     */
    subject_ids: number[];
}
/**
 * Review Object Attributes
 */
export interface Review {
    /**
     * When the paired subject_ids are available for reviews. All timestamps are the top of an hour.
     */
    available_at: Date;
    /**
     * Collection of unique identifiers for {@link Subjects|subjects}.
     */
    subject_ids: number[];
}
//# sourceMappingURL=types.d.ts.map