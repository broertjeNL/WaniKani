import { cleanParams } from '../../utils';
import {
    SpacedRepetitionsParams,
    SpacedRepetitionSystemCollectionResponse,
    SpacedRepetitionSystemResponse,
} from './types';
import { AxiosInstance } from 'axios';

/**
 * Available spaced repetition systems used for calculating srs_stage changes to {@link Assignments|Assignments} and {@link Reviews|Reviews}. Has relationship with {@link Subjects|Subjects}
 */
export class SpacedRepetitionSystems {
    constructor(private wanikaniClient: AxiosInstance) {}

    /**
     * Returns a collection of all spaced_repetition_systems, ordered by ascending id, 500 at a time.
     * @param {SpacedRepetitionsParams} params - The collection of spaced_repetition_systems will be filtered on the parameters provided.
     */
    public async getAll(params?: SpacedRepetitionsParams) {
        const { data } = await this.wanikaniClient<SpacedRepetitionSystemCollectionResponse>(
            'spaced_repetition_systems',
            {
                ...(params && { params: cleanParams(params) }),
            },
        );
        return data;
    }

    /**
     * Retrieves a specific spaced_repetition_system by its id.
     * @param {number} id - Unique identifier of the spaced_repetition_system.
     */
    public async get(id: number) {
        const { data } = await this.wanikaniClient<SpacedRepetitionSystemResponse>(`spaced_repetition_systems/${id}`);
        return data;
    }
}
