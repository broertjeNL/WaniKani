import { CollectionApiResponse, ResourceApiResponse } from '../../services';
export type LevelProgressionCollectionResponse = CollectionApiResponse<LevelProgressionResourceResponse>;
export type LevelProgressionResourceResponse = ResourceApiResponse<LevelProgressionData, 'level_progression'>;
/**
 * Level Progression Data Structure
 */
export interface LevelProgressionData {
    /**
     * Timestamp when the user abandons the level. This is primary used when the user initiates a {@link Resets|reset}.
     */
    abandoned_at?: Date;
    /**
     * Timestamp when the user burns 100% of the assignments belonging to the associated subject's level.
     */
    completed_at?: Date;
    /**
     * Timestamp when the level progression is created
     */
    created_at: Date;
    /**
     * The level of the progression, with possible values from 1 to 60.
     */
    level: number;
    /**
     * Timestamp when the user passes at least 90% of the assignments with a type of kanji belonging to the associated subject's level.
     */
    passed_at?: Date;
    /**
     * Timestamp when the user starts their first lesson of a subject belonging to the level.
     */
    started_at?: Date;
    /**
     * Timestamp when the user can access lessons and reviews for the level.
     */
    unlocked_at?: Date;
}
/**
 * The parameters the collection of level progressions can be filtered on.
 */
export interface LevelProgressionParams {
    /**
     * Only level progressions where data.id matches one of the array values are returned.
     */
    ids?: number[];
    /**
     * Only level_progressions updated after this time are returned.
     */
    updated_after?: Date;
}
//# sourceMappingURL=types.d.ts.map