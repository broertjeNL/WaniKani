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
exports.SpacedRepetitionSystems = void 0;
const utils_1 = require("../../utils");
/**
 * Available spaced repetition systems used for calculating srs_stage changes to {@link Assignments|Assignments} and {@link Reviews|Reviews}. Has relationship with {@link Subjects|Subjects}
 */
class SpacedRepetitionSystems {
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all spaced_repetition_systems, ordered by ascending id, 500 at a time.
     * @param {SpacedRepetitionsParams} params - The collection of spaced_repetition_systems will be filtered on the parameters provided.
     */
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient('spaced_repetition_systems', Object.assign({}, (params && { params: (0, utils_1.cleanParams)(params) })));
            return data;
        });
    }
    /**
     * Retrieves a specific spaced_repetition_system by its id.
     * @param {number} id - Unique identifier of the spaced_repetition_system.
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient(`spaced_repetition_systems/${id}`);
            return data;
        });
    }
}
exports.SpacedRepetitionSystems = SpacedRepetitionSystems;
