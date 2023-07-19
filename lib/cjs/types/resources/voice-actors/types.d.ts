import { voiceActorGenders } from '../../constants';
import { CollectionApiResponse, ResourceApiResponse } from '../../services';
export type VoiceActorCollectionResponse = CollectionApiResponse<VoiceActorResponse>;
export type VoiceActorResponse = ResourceApiResponse<VoiceActorData, 'voice_actor'>;
/**
 * Voice Actor Data Structure
 */
export interface VoiceActorData {
    /**
     * Details about the voice actor.
     */
    description: string;
    /**
     * male or female
     */
    gender: VoiceActorGender;
    /**
     * The voice actor's name
     */
    name: string;
}
/**
 * The collection of voice_actors will be filtered on the parameters provided.
 */
export interface VoiceActorParams {
    /**
     * Only voice_actors where data.id matches one of the array values are returned.
     */
    ids?: number[];
    /**
     * Only voice_actors updated after this time are returned.
     */
    updated_after?: Date;
}
export type VoiceActorGender = (typeof voiceActorGenders)[number];
//# sourceMappingURL=types.d.ts.map