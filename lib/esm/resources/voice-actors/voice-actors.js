import { cleanParams } from '../../utils';
/**
 * Available voice actors used for vocabulary reading pronunciation audio.
 * */
export class VoiceActors {
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
            ...(params && { params: cleanParams(params) }),
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
