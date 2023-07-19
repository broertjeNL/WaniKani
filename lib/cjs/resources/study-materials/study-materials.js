"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudyMaterials = void 0;
const utils_1 = require("../../utils");
/**
 * Study materials store user-specific notes and synonyms for a given subject. The records are created as soon as the user enters any study information.
 */
class StudyMaterials {
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all study material, ordered by ascending created_at, 500 at a time.
     * @param {StudyMaterialParams} params - The collection of study material records will be filtered on the parameters provided.
     */
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient('study_materials', Object.assign({}, (params && { params: (0, utils_1.cleanParams)(params) })));
            return data;
        });
    }
    /**
     * Retrieves a specific study material by its id.
     * @param {number} id - Unique identifier of the study material.
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient(`study_materials/${id}`);
            return data;
        });
    }
    /**
     * Creates a study material for a specific subject_id.
     *
     * The owner of the api key can only create one study_material per subject_id.
     * @param {StudyMaterialCreateParams} params
     */
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient.post('study_materials', {
                params: (0, utils_1.cleanParams)(params),
            });
            return data;
        });
    }
    /**
     * Updates a study material for a specific id.
     * @param {number} id
     * @param {StudyMaterialUpdateParams} params
     */
    update(id, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient.put(`study_materials/${id}`, {
                params: (0, utils_1.cleanParams)(params),
            });
            return data;
        });
    }
}
exports.StudyMaterials = StudyMaterials;
