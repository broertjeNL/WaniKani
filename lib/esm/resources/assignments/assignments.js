"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignments = void 0;
const utils_1 = require("../../utils");
/**
 * Assignments contain information about a user's progress on a particular subject, including their current state and timestamps for various progress milestones. Assignments are created when a user has passed all the components of the given subject and the assignment is at or below their current level for the first time.
 * */
class Assignments {
    wanikaniClient;
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all assignments, ordered by ascending created_at, 500 at a time.
     *
     * It is possible for a user to have started an assignment for a subject that was later moved to a level above their current level. To exclude those assignments, filter by levels from 1 to the users current level.
     *
     * @param {AssignmentParams | undefined} params - The collection of assignments will be filtered on the parameters provided.
     * */
    async getAll(params) {
        const { data } = await this.wanikaniClient('assignments', {
            ...(params && { params: (0, utils_1.cleanParams)(params) }),
        });
        return data;
    }
    /**
     * Retrieves a specific assignment by its id.
     * @param {number} id - Unique identifier of the assignment.
     * */
    async get(id) {
        const { data } = await this.wanikaniClient(`assignments/${id}`);
        return data;
    }
    /**
     * Mark the assignment as started, moving the assignment from the lessons queue to the review queue. Returns the updated assignment.
     * @param {number} id - Unique identifier of the assignment.
     * @param {AssignmentStartParams} [params] - Allowed parameters
     */
    async start(id, params) {
        const { data } = await this.wanikaniClient.put(`assignments/${id}/start`);
        return data;
    }
}
exports.Assignments = Assignments;
