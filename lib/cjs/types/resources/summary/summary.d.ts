import { SummaryResponse } from './types';
import { AxiosInstance } from 'axios';
/**
 * The summary report contains currently available lessons and reviews and the reviews that will become available in the next 24 hours, grouped by the hour.
 */
export declare class Summary {
    wanikaniClient: AxiosInstance;
    constructor(wanikaniClient: AxiosInstance);
    /**
     * Retrieves a summary report.
     * */
    get(): Promise<SummaryResponse>;
}
//# sourceMappingURL=summary.d.ts.map