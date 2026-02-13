"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoiceActors = void 0;
const utils_1 = require("../../utils");
/**
 * Available voice actors used for vocabulary reading pronunciation audio.
 * */
class VoiceActors {
    wanikaniClient;
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a collection of all voice_actors, ordered by ascending created_at, 500 at a time.
     * @param {VoiceActorParams} params - The collection of voice_actors will be filtered on the parameters provided.
     */
    async getAll(params) {
        const { data } = await this.wanikaniClient('voice_actors', {
            ...(params && { params: (0, utils_1.cleanParams)(params) }),
        });
        return data;
    }
    /**
     * Retrieves a specific voice_actor by its id.
     * @param {number} id
     */
    async get(id) {
        const { data } = await this.wanikaniClient(`voice_actors/${id}`);
        return data;
    }
}
exports.VoiceActors = VoiceActors;
