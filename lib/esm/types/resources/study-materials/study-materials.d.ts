import { StudyMaterialCreateParams, StudyMaterialParams, StudyMaterialsCollectionResponse, StudyMaterialsResourceResponse, StudyMaterialUpdateParams } from './types';
import { AxiosInstance } from 'axios';
/**
 * Study materials store user-specific notes and synonyms for a given subject. The records are created as soon as the user enters any study information.
 */
export declare class StudyMaterials {
    wanikaniClient: AxiosInstance;
    constructor(wanikaniClient: AxiosInstance);
    /**
     * Returns a collection of all study material, ordered by ascending created_at, 500 at a time.
     * @param {StudyMaterialParams} params - The collection of study material records will be filtered on the parameters provided.
     */
    getAll(params?: StudyMaterialParams): Promise<StudyMaterialsCollectionResponse>;
    /**
     * Retrieves a specific study material by its id.
     * @param {number} id - Unique identifier of the study material.
     */
    get(id: number): Promise<StudyMaterialsResourceResponse>;
    /**
     * Creates a study material for a specific subject_id.
     *
     * The owner of the api key can only create one study_material per subject_id.
     * @param {StudyMaterialCreateParams} params
     */
    create(params: StudyMaterialCreateParams): Promise<StudyMaterialsResourceResponse>;
    /**
     * Updates a study material for a specific id.
     * @param {number} id
     * @param {StudyMaterialUpdateParams} params
     */
    update(id: number, params: StudyMaterialUpdateParams): Promise<StudyMaterialsResourceResponse>;
}
//# sourceMappingURL=study-materials.d.ts.map