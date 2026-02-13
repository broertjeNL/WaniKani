"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subjects = void 0;
const utils_1 = require("../../utils");
/**
 * Subjects are the radicals, kanji, vocabulary, and kana_vocabulary that are learned through lessons and reviews. They contain basic dictionary information, such as meanings and/or readings, and information about their relationship to other items with WaniKani, like their level.
 * */
class Subjects {
    wanikaniClient;
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all subjects, ordered by ascending created_at, 1000 at a time.
     * @template {_Subjects} T
     * @template {SubjectType} U
     * @param {SubjectParameters} params - The collection of subjects will be filtered on the parameters provided.
     */
    async getAll(params) {
        const { data } = await this.wanikaniClient('subjects', {
            ...(params && { params: (0, utils_1.cleanParams)(params) }),
        });
        return data;
    }
    /**
     * Retrieves a specific subject by its id. The structure of the response depends on the subject type. See the {@link SubjectData|subject data structure} for details.
     * @param {number} id - Unique identifier of the subject.
     */
    async get(id) {
        const { data } = await this.wanikaniClient(`subjects/${id}`);
        return data;
    }
}
exports.Subjects = Subjects;
