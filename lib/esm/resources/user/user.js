"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/**
 * The user summary returns basic information for the user making the API request, identified by their API key.
 * */
class User {
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
exports.User = User;
