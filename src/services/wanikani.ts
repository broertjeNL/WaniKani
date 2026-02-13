import {
    Assignments,
    LevelProgressions,
    Resets,
    Reviews,
    ReviewStatistics,
    SpacedRepetitionSystems,
    StudyMaterials,
    Subjects,
    Summary,
    User,
    VoiceActors,
} from '../resources';
import axios, { AxiosInstance } from 'axios';
import { baseURL } from '../constants';
import * as qs from 'qs';

export class WaniKani {
    wanikaniClient: AxiosInstance;

    public assignments: Assignments;
    public levelProgressions: LevelProgressions;
    public resets: Resets;
    public reviews: Reviews;
    public reviewStatistics: ReviewStatistics;
    public spacedRepetitionSystems: SpacedRepetitionSystems;
    public studyMaterials: StudyMaterials;
    public subjects: Subjects;
    public summary: Summary;
    public user: User;
    public voiceActors: VoiceActors;

    constructor(api_token: string) {
        this.wanikaniClient = axios.create({
            baseURL,
            timeout: 1000,
            headers: {
                Authorization: 'Bearer ' + api_token,
            },
            paramsSerializer: {
                serialize: (params) => qs.stringify(params, { arrayFormat: 'comma' }),
                indexes: null,
            },
        });

        this.assignments = new Assignments(this.wanikaniClient);
        this.levelProgressions = new LevelProgressions(this.wanikaniClient);
        this.resets = new Resets(this.wanikaniClient);
        this.reviews = new Reviews(this.wanikaniClient);
        this.reviewStatistics = new ReviewStatistics(this.wanikaniClient);
        this.spacedRepetitionSystems = new SpacedRepetitionSystems(this.wanikaniClient);
        this.studyMaterials = new StudyMaterials(this.wanikaniClient);
        this.subjects = new Subjects(this.wanikaniClient);
        this.summary = new Summary(this.wanikaniClient);
        this.user = new User(this.wanikaniClient);
        this.voiceActors = new VoiceActors(this.wanikaniClient);
    }
}
