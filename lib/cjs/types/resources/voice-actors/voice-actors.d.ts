import { VoiceActorCollectionResponse, VoiceActorParams, VoiceActorResponse } from './types';
import { AxiosInstance } from 'axios';
/**
 * Available voice actors used for vocabulary reading pronunciation audio.
 * */
export declare class VoiceActors {
    private wanikaniClient;
    constructor(wanikaniClient: AxiosInstance);
    /**
     * Returns a collection of all voice_actors, ordered by ascending created_at, 500 at a time.
     * @param {VoiceActorParams} params - The collection of voice_actors will be filtered on the parameters provided.
     */
    getAll(params?: VoiceActorParams): Promise<VoiceActorCollectionResponse>;
    /**
     * Retrieves a specific voice_actor by its id.
     * @param {number} id
     */
    get(id: number): Promise<VoiceActorResponse>;
}
//# sourceMappingURL=voice-actors.d.ts.map