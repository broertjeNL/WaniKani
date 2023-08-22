import { cleanParams } from '../../utils';
import {
    StudyMaterialCreateParams,
    StudyMaterialParams,
    StudyMaterialsCollectionResponse,
    StudyMaterialsResourceResponse,
    StudyMaterialUpdateParams,
} from './types';
import { AxiosInstance } from 'axios';

/**
 * Study materials store user-specific notes and synonyms for a given subject. The records are created as soon as the user enters any study information.
 */
export class StudyMaterials {
    constructor(private wanikaniClient: AxiosInstance) {}

    /**
     * Returns a collection of all study material, ordered by ascending created_at, 500 at a time.
     * @param {StudyMaterialParams} params - The collection of study material records will be filtered on the parameters provided.
     */
    public async getAll(params?: StudyMaterialParams) {
        const { data } = await this.wanikaniClient<StudyMaterialsCollectionResponse>('study_materials', {
            ...(params && { params: cleanParams(params) }),
        });
        return data;
    }

    /**
     * Retrieves a specific study material by its id.
     * @param {number} id - Unique identifier of the study material.
     */
    public async get(id: number) {
        const { data } = await this.wanikaniClient<StudyMaterialsResourceResponse>(`study_materials/${id}`);
        return data;
    }

    /**
     * Creates a study material for a specific subject_id.
     *
     * The owner of the api key can only create one study_material per subject_id.
     * @param {StudyMaterialCreateParams} params
     */
    public async create(params: StudyMaterialCreateParams) {
        const { data } = await this.wanikaniClient.post<StudyMaterialsResourceResponse>('study_materials', {
            params: cleanParams(params),
        });
        return data;
    }

    /**
     * Updates a study material for a specific id.
     * @param {number} id
     * @param {StudyMaterialUpdateParams} params
     */
    public async update(id: number, params: StudyMaterialUpdateParams) {
        const { data } = await this.wanikaniClient.put<StudyMaterialsResourceResponse>(`study_materials/${id}`, {
            params: cleanParams(params),
        });
        return data;
    }
}
