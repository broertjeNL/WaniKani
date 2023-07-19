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
exports.Resets = void 0;
const utils_1 = require("../../utils");
/**
 * Users can reset their progress back to any level at or below their current level. When they reset to a particular level, all of the assignments and review_statistics at that level or higher are set back to their default state.
 *
 * Resets contain information about when those resets happen, the starting level, and the target level.
 */
class Resets {
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all resets, ordered by ascending created_at, 500 at a time.
     * @param {ResetsParams} params - The collection of resets will be filtered on the parameters provided.
     */
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient('resets', Object.assign({}, (params && { params: (0, utils_1.cleanParams)(params) })));
            return data;
        });
    }
    /**
     * Retrieves a specific reset by its id.
     * @param {number} id - Unique identifier of the reset.
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient(`resets/${id}`);
            return data;
        });
    }
}
exports.Resets = Resets;
