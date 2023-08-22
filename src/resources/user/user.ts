import { UserPreferences, UserResponse } from './types';
import { AxiosInstance } from 'axios';

/**
 * The user summary returns basic information for the user making the API request, identified by their API key.
 * */
export class User {
    constructor(private wanikaniClient: AxiosInstance) {}

    /**
     * Returns a summary of user information.
     * */
    public async get() {
        const { data } = await this.wanikaniClient<UserResponse>('user');
        return data;
    }

    /**
     * Returns an updated summary of user information.
     * */
    public async update(preferences: Partial<UserPreferences>) {
        const { data } = await this.wanikaniClient.put<UserResponse>('user', { user: { preferences } });
        return data;
    }
}
