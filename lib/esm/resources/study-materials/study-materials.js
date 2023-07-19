import { cleanParams } from '../../utils';
/**
 * Study materials store user-specific notes and synonyms for a given subject. The records are created as soon as the user enters any study information.
 */
export class StudyMaterials {
    wanikaniClient;
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all study material, ordered by ascending created_at, 500 at a time.
     * @param {StudyMaterialParams} params - The collection of study material records will be filtered on the parameters provided.
     */
    async getAll(params) {
        const { data } = await this.wanikaniClient('study_materials', {
            ...(params && { params: cleanParams(params) }),
        });
        return data;
    }
    /**
     * Retrieves a specific study material by its id.
     * @param {number} id - Unique identifier of the study material.
     */
    async get(id) {
        const { data } = await this.wanikaniClient(`study_materials/${id}`);
        return data;
    }
    /**
     * Creates a study material for a specific subject_id.
     *
     * The owner of the api key can only create one study_material per subject_id.
     * @param {StudyMaterialCreateParams} params
     */
    async create(params) {
        const { data } = await this.wanikaniClient.post('study_materials', {
            params: cleanParams(params),
        });
        return data;
    }
    /**
     * Updates a study material for a specific id.
     * @param {number} id
     * @param {StudyMaterialUpdateParams} params
     */
    async update(id, params) {
        const { data } = await this.wanikaniClient.put(`study_materials/${id}`, {
            params: cleanParams(params),
        });
        return data;
    }
}
