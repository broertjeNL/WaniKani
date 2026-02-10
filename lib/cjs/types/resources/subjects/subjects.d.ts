import { SubjectCollectionApiResponse, SubjectParameters, SubjectType, _Subjects, SubjectResourceApiResponse } from './types';
import { AxiosInstance } from 'axios';
/**
 * Subjects are the radicals, kanji, vocabulary, and kana_vocabulary that are learned through lessons and reviews. They contain basic dictionary information, such as meanings and/or readings, and information about their relationship to other items with WaniKani, like their level.
 * */
export declare class Subjects {
    private wanikaniClient;
    constructor(wanikaniClient: AxiosInstance);
    /**
     * Returns a collection of all subjects, ordered by ascending created_at, 1000 at a time.
     * @template {_Subjects} T
     * @template {SubjectType} U
     * @param {SubjectParameters} params - The collection of subjects will be filtered on the parameters provided.
     */
    getAll<T extends _Subjects = _Subjects, U extends SubjectType = SubjectType>(params?: SubjectParameters): Promise<SubjectCollectionApiResponse<T, U>>;
    /**
     * Retrieves a specific subject by its id. The structure of the response depends on the subject type. See the {@link SubjectData|subject data structure} for details.
     * @param {number} id - Unique identifier of the subject.
     */
    get<T extends _Subjects = _Subjects, U extends SubjectType = SubjectType>(id: number): Promise<SubjectResourceApiResponse<T, U>>;
}
//# sourceMappingURL=subjects.d.ts.map