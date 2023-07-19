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
exports.Reviews = void 0;
const utils_1 = require("../../utils");
/**
 * Reviews log all the correct and incorrect answers provided through the 'Reviews' section of WaniKani. Review records are created when a user answers all the parts of a subject correctly once; some subjects have both meaning or reading parts, and some only have one or the other. Note that reviews are not created for the quizzes in lessons.
 */
class Reviews {
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all reviews, ordered by ascending created_at, 1000 at a time.
     * @param {ReviewParams} params - The collection of reviews will be filtered on the parameters provided.
     */
    getAll(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient('reviews', Object.assign({}, (params && { params: (0, utils_1.cleanParams)(params) })));
            return data;
        });
    }
    /**
     * Retrieves a specific review by its id.
     * @param {number} id - Unique identifier of the review.
     */
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient(`reviews/${id}`);
            return data;
        });
    }
    /**
     * Creates a review for a specific assignment_id. Using the related subject_id is also a valid alternative to using assignment_id.
     *
     * Some criteria must be met in order for a review to be created: available_at must be not null and in the past.
     *
     * When a review is registered, the associated assignment and review_statistic are both updated. These are returned in the response body under resources_updated.
     * @param {ReviewCreateParams} params
     */
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient.post('reviews');
            return data;
        });
    }
}
exports.Reviews = Reviews;
