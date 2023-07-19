import { CollectionApiResponse, ResourceApiResponse } from '../../services';

export type ResetsCollectionResponse = CollectionApiResponse<ResetsResourceResponse>;
export type ResetsResourceResponse = ResourceApiResponse<ResetData, 'reset'>;

/**
 * Reset Data Structure
 */
export interface ResetData {
    /**
     * Timestamp when the user confirmed the reset.
     */
    confirmed_at?: Date;
    /**
     * Timestamp when the reset was created.
     */
    created_at: Date;
    /**
     * The user's level before the reset, from 1 to 60
     */
    original_level: number;
    /**
     * The user's level after the reset, from 1 to 60. It must be less than or equal to original_level.
     */
    target_level: number;
}

/**
 * The parameters the collection of resets can be filtered on.
 */
export interface ResetsParams {
    /**
     * Only resets where data.id matches one of the array values are returned.
     */
    ids?: number[];
    /**
     * Only resets updated after this time are returned.
     */
    updated_after?: Date;
}
