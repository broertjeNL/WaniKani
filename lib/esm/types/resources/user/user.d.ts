import { UserPreferences, UserResponse } from './types';
import { AxiosInstance } from 'axios';
/**
 * The user summary returns basic information for the user making the API request, identified by their API key.
 * */
export declare class User {
    wanikaniClient: AxiosInstance;
    constructor(wanikaniClient: AxiosInstance);
    /**
     * Returns a summary of user information.
     * */
    get(): Promise<UserResponse>;
    /**
     * Returns an updated summary of user information.
     * */
    update(preferences: Partial<UserPreferences>): Promise<UserResponse>;
}
//# sourceMappingURL=user.d.ts.map