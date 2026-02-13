"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
/**
 * The summary report contains currently available lessons and reviews and the reviews that will become available in the next 24 hours, grouped by the hour.
 */
class Summary {
    wanikaniClient;
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Retrieves a summary report.
     * */
    async get() {
        const { data } = await this.wanikaniClient('summary');
        return data;
    }
}
exports.Summary = Summary;
