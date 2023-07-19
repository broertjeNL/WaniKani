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
exports.Subjects = void 0;
const utils_1 = require("../../utils");
/**
 * Subjects are the radicals, kanji, vocabulary, and kana_vocabulary that are learned through lessons and reviews. They contain basic dictionary information, such as meanings and/or readings, and information about their relationship to other items with WaniKani, like their level.
 * */
class Subjects {
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all subjects, ordered by ascending created_at, 1000 at a time.
     * @template {_Subjects} T
     * @template {SubjectType} U
     * @param {SubjectParameters} params - The collection of subjects will be filtered on the parameters provided.
     */
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient('subjects', Object.assign({}, (params && { params: (0, utils_1.cleanParams)(params) })));
            return data;
        });
    }
    /**
     * Retrieves a specific subject by its id. The structure of the response depends on the subject type. See the {@link SubjectData|subject data structure} for details.
     * @param {number} id - Unique identifier of the subject.
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient(`subjects/${id}`);
            return data;
        });
    }
}
exports.Subjects = Subjects;
