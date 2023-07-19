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
exports.ReviewStatistics = void 0;
const utils_1 = require("../../utils");
/**
 * Review statistics summarize the activity recorded in {@link Reviews|reviews}. They contain sum the number of correct and incorrect answers for both meaning and reading. They track current and maximum streaks of correct answers. They store the overall percentage of correct answers versus total answers.
 *
 * A review statistic is created when the user has done their first review on the related subject.
 */
class ReviewStatistics {
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all review statistics, ordered by ascending created_at, 500 at a time.
     * @param {ReviewStatisticsParams} params - The collection of review statistics will be filtered on the parameters provided.
     */
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient('review_statistics', Object.assign({}, (params && { params: (0, utils_1.cleanParams)(params) })));
            return data;
        });
    }
    /**
     * Retrieves a specific review statistic by its id.
     * @param {number} id - Unique identifier of the review_statistic.
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient(`review_statistics/${id}`);
            return data;
        });
    }
}
exports.ReviewStatistics = ReviewStatistics;
