/**
 * The user summary returns basic information for the user making the API request, identified by their API key.
 * */
export class User {
    wanikaniClient;
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a summary of user information.
     * */
    async get() {
        const { data } = await this.wanikaniClient('user');
        return data;
    }
    /**
     * Returns an updated summary of user information.
     * */
    async update(preferences) {
        const { data } = await this.wanikaniClient.put('user', { user: { preferences } });
        return data;
    }
}
