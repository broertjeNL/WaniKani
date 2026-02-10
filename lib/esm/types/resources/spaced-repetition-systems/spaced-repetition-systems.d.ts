import { SpacedRepetitionsParams, SpacedRepetitionSystemCollectionResponse, SpacedRepetitionSystemResponse } from './types';
import { AxiosInstance } from 'axios';
/**
 * Available spaced repetition systems used for calculating srs_stage changes to {@link Assignments|Assignments} and {@link Reviews|Reviews}. Has relationship with {@link Subjects|Subjects}
 */
export declare class SpacedRepetitionSystems {
    private wanikaniClient;
    constructor(wanikaniClient: AxiosInstance);
    /**
     * Returns a collection of all spaced_repetition_systems, ordered by ascending id, 500 at a time.
     * @param {SpacedRepetitionsParams} params - The collection of spaced_repetition_systems will be filtered on the parameters provided.
     */
    getAll(params?: SpacedRepetitionsParams): Promise<SpacedRepetitionSystemCollectionResponse>;
    /**
     * Retrieves a specific spaced_repetition_system by its id.
     * @param {number} id - Unique identifier of the spaced_repetition_system.
     */
    get(id: number): Promise<SpacedRepetitionSystemResponse>;
}
//# sourceMappingURL=spaced-repetition-systems.d.ts.map