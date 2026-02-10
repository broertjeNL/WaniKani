import { Assignments, LevelProgressions, Resets, Reviews, ReviewStatistics, SpacedRepetitionSystems, StudyMaterials, Subjects, Summary, User, VoiceActors } from '../resources';
import axios from 'axios';
export declare class WaniKani {
    private api_token;
    constructor(api_token: string);
    wanikaniClient: axios.AxiosInstance;
    assignments: Assignments;
    levelProgressions: LevelProgressions;
    resets: Resets;
    reviews: Reviews;
    reviewStatistics: ReviewStatistics;
    spacedRepetitionSystems: SpacedRepetitionSystems;
    studyMaterials: StudyMaterials;
    subjects: Subjects;
    summary: Summary;
    user: User;
    voiceActors: VoiceActors;
}
//# sourceMappingURL=wanikani.d.ts.map