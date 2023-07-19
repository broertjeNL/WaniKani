import { Assignments, LevelProgressions, Resets, Reviews, ReviewStatistics, SpacedRepetitionSystems, StudyMaterials, Subjects, Summary, User, VoiceActors } from '../resources';
export declare class WaniKani {
    wanikaniClient: import("axios").AxiosInstance;
    constructor(api_token: string);
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