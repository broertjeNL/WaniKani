import { ResetsCollectionResponse, ResetsParams, ResetsResourceResponse } from './types';
import { AxiosInstance } from 'axios';
/**
 * Users can reset their progress back to any level at or below their current level. When they reset to a particular level, all of the assignments and review_statistics at that level or higher are set back to their default state.
 *
 * Resets contain information about when those resets happen, the starting level, and the target level.
 */
export declare class Resets {
    wanikaniClient: AxiosInstance;
    constructor(wanikaniClient: AxiosInstance);
    /**
     * Returns a collection of all resets, ordered by ascending created_at, 500 at a time.
     * @param {ResetsParams} params - The collection of resets will be filtered on the parameters provided.
     */
    getAll(params?: ResetsParams): Promise<ResetsCollectionResponse>;
    /**
     * Retrieves a specific reset by its id.
     * @param {number} id - Unique identifier of the reset.
     */
    get(id: number): Promise<ResetsResourceResponse>;
}
//# sourceMappingURL=resets.d.ts.map