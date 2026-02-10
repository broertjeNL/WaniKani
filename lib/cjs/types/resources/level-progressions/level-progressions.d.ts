import { LevelProgressionCollectionResponse, LevelProgressionParams, LevelProgressionResourceResponse } from './types';
import { AxiosInstance } from 'axios';
/**
 * Level progressions contain information about a user's progress through the WaniKani levels.
 *
 * A level progression is created when a user has met the prerequisites for leveling up, which are:
 *
 * - Reach a 90% passing rate on assignments for a user's current level with a subject_type of kanji. Passed assignments have data.passed equal to true and a data.passed_at that's in the past.
 * - Have access to the level. Under /user, the data.level must be less than or equal to data.subscription.max_level_granted.
 */
export declare class LevelProgressions {
    private wanikaniClient;
    constructor(wanikaniClient: AxiosInstance);
    /**
     * Returns a collection of all level progressions, ordered by ascending created_at, 500 at a time.
     * @param {LevelProgressionParams} params - The collection of assignments will be filtered on the parameters provided.
     */
    getAll(params?: LevelProgressionParams): Promise<LevelProgressionCollectionResponse>;
    /**
     * Retrieves a specific level progression by its id.
     * @param {number} id - Unique identifier of the level progression.
     */
    get(id: number): Promise<LevelProgressionResourceResponse>;
}
//# sourceMappingURL=level-progressions.d.ts.map