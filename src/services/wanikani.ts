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
import axios from 'axios';
import { baseURL } from '../constants';
import * as qs from 'qs';

export class WaniKani {
    constructor(private api_token: string) {}

    wanikaniClient = axios.create({
        baseURL,
        timeout: 1000,
        headers: {
            Authorization: 'Bearer ' + this.api_token,
        },
        paramsSerializer: {
            encode: (params) => qs.stringify(params, { arrayFormat: 'comma' }),
            indexes: null,
        },
    });

    public assignments: Assignments = new Assignments(this.wanikaniClient);
    public levelProgressions: LevelProgressions = new LevelProgressions(this.wanikaniClient);
    public resets: Resets = new Resets(this.wanikaniClient);
    public reviews: Reviews = new Reviews(this.wanikaniClient);
    public reviewStatistics: ReviewStatistics = new ReviewStatistics(this.wanikaniClient);
    public spacedRepetitionSystems: SpacedRepetitionSystems = new SpacedRepetitionSystems(this.wanikaniClient);
    public studyMaterials: StudyMaterials = new StudyMaterials(this.wanikaniClient);
    public subjects: Subjects = new Subjects(this.wanikaniClient);
    public summary: Summary = new Summary(this.wanikaniClient);
    public user: User = new User(this.wanikaniClient);
    public voiceActors: VoiceActors = new VoiceActors(this.wanikaniClient);
}
