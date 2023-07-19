import { objectTypes, singularResourceTypes } from '../constants';
export interface ResourceApiResponse<T = any, U = ObjectType | ResourceType> extends ApiResponse<T, U> {
    id: number;
}
export interface CollectionApiResponse<T = any> extends ApiResponse<T[], 'collection'> {
    /**
     * When there are more resources to return than the per-page limit, we use a cursor-based pagination scheme to move through the pages of results. We use the id of a resource as the cursor.
     */
    pages: {
        /**
         * The URL of the next page of results. If there are no more results, the value is null.
         */
        next_url?: string;
        /**
         * The URL of the previous page of results. If there are no results at all or no previous page to go to, the value is null.
         */
        previous_url?: string;
        /**
         * Maximum number of resources delivered for this collection.
         */
        per_page: number;
    };
    /**
     * Count of all resources available within the specified scope, not limited to pagination.
     */
    total_count: number;
}
export interface ApiResponse<T = any, U = ObjectType | ResourceType> {
    /**
     * The kind of {@link ObjectType|object} returned.
     */
    object: U;
    /**
     * The URL of the request. For collections, that will contain all the filters and options you've passed to the API. Resources have a single URL and don't need to be filtered, so the URL will be the same in both resource and collection responses.
     */
    url: string;
    /**
     * For collections, this is the timestamp of the most recently updated resource in the specified scope and is not limited by pagination. If no resources were returned for the specified scope, then this will be null. For a resource, then this is the last time that particular resource was updated.
     */
    data_updated_at: Date;
    /**
     * For collections, this is going to be the resources returned by the specified scope. For resources, these are the attributes that are specific to that particular instance and kind of resource.
     */
    data: T;
}
export type ObjectType = (typeof objectTypes)[number];
export type ResourceType = (typeof singularResourceTypes)[number];
//# sourceMappingURL=types.d.ts.map