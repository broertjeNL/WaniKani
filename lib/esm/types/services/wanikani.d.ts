import { Assignments, LevelProgressions, Resets, Reviews, ReviewStatistics, SpacedRepetitionSystems, StudyMaterials, Subjects, Summary, User, VoiceActors } from '../resources';
import { AxiosInstance } from 'axios';
export declare class WaniKani {
    wanikaniClient: AxiosInstance;
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
    constructor(api_token: string);
}
//# sourceMappingURL=wanikani.d.ts.map