import { Assignments, LevelProgressions, Resets, Reviews, ReviewStatistics, SpacedRepetitionSystems, StudyMaterials, Subjects, Summary, User, VoiceActors, } from '../resources';
import axios from 'axios';
import { baseURL } from '../constants';
export class WaniKani {
    wanikaniClient = axios.create({
        baseURL,
        timeout: 1000,
    });
    constructor(api_token) {
        this.wanikaniClient.defaults.headers.common['Authorization'] = 'Bearer ' + api_token;
    }
    assignments = new Assignments(this.wanikaniClient);
    levelProgressions = new LevelProgressions(this.wanikaniClient);
    resets = new Resets(this.wanikaniClient);
    reviews = new Reviews(this.wanikaniClient);
    reviewStatistics = new ReviewStatistics(this.wanikaniClient);
    spacedRepetitionSystems = new SpacedRepetitionSystems(this.wanikaniClient);
    studyMaterials = new StudyMaterials(this.wanikaniClient);
    subjects = new Subjects(this.wanikaniClient);
    summary = new Summary(this.wanikaniClient);
    user = new User(this.wanikaniClient);
    voiceActors = new VoiceActors(this.wanikaniClient);
}
