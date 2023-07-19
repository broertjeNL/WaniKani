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
exports.LevelProgressions = void 0;
const utils_1 = require("../../utils");
/**
 * Level progressions contain information about a user's progress through the WaniKani levels.
 *
 * A level progression is created when a user has met the prerequisites for leveling up, which are:
 *
 * - Reach a 90% passing rate on assignments for a user's current level with a subject_type of kanji. Passed assignments have data.passed equal to true and a data.passed_at that's in the past.
 * - Have access to the level. Under /user, the data.level must be less than or equal to data.subscription.max_level_granted.
 */
class LevelProgressions {
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all level progressions, ordered by ascending created_at, 500 at a time.
     * @param {LevelProgressionParams} params - The collection of assignments will be filtered on the parameters provided.
     */
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient('level_progressions', Object.assign({}, (params && { params: (0, utils_1.cleanParams)(params) })));
            return data;
        });
    }
    /**
     * Retrieves a specific level progression by its id.
     * @param {number} id - Unique identifier of the level progression.
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient(`level_progressions/${id}`);
            return data;
        });
    }
}
exports.LevelProgressions = LevelProgressions;
