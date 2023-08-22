import { cleanParams } from '../../utils';
import { VoiceActorCollectionResponse, VoiceActorParams, VoiceActorResponse } from './types';
import { AxiosInstance } from 'axios';

/**
 * Available voice actors used for vocabulary reading pronunciation audio.
 * */
export class VoiceActors {
    constructor(private wanikaniClient: AxiosInstance) {}

    /**
     * Returns a collection of all voice_actors, ordered by ascending created_at, 500 at a time.
     * @param {VoiceActorParams} params - The collection of voice_actors will be filtered on the parameters provided.
     */
    public async getAll(params?: VoiceActorParams) {
        const { data } = await this.wanikaniClient<VoiceActorCollectionResponse>('voice_actors', {
            ...(params && { params: cleanParams(params) }),
        });
        return data;
    }

    /**
     * Retrieves a specific voice_actor by its id.
     * @param {number} id
     */
    public async get(id: number) {
        const { data } = await this.wanikaniClient<VoiceActorResponse>(`voice_actors/${id}`);
        return data;
    }
}
