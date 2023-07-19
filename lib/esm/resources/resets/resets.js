import { cleanParams } from '../../utils';
/**
 * Users can reset their progress back to any level at or below their current level. When they reset to a particular level, all of the assignments and review_statistics at that level or higher are set back to their default state.
 *
 * Resets contain information about when those resets happen, the starting level, and the target level.
 */
export class Resets {
    wanikaniClient;
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all resets, ordered by ascending created_at, 500 at a time.
     * @param {ResetsParams} params - The collection of resets will be filtered on the parameters provided.
     */
    async getAll(params) {
        const { data } = await this.wanikaniClient('resets', {
            ...(params && { params: cleanParams(params) }),
        });
        return data;
    }
    /**
     * Retrieves a specific reset by its id.
     * @param {number} id - Unique identifier of the reset.
     */
    async get(id) {
        const { data } = await this.wanikaniClient(`resets/${id}`);
        return data;
    }
}
