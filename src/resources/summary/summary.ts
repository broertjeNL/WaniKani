import { SummaryResponse } from './types';
import { AxiosInstance } from 'axios';

/**
 * The summary report contains currently available lessons and reviews and the reviews that will become available in the next 24 hours, grouped by the hour.
 */
export class Summary {
    constructor(private wanikaniClient: AxiosInstance) {}

    /**
     * Retrieves a summary report.
     * */
    public async get() {
        const { data } = await this.wanikaniClient<SummaryResponse>('summary');
        return data;
    }
}
