"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaniKani = void 0;
const resources_1 = require("../resources");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
class WaniKani {
    constructor(api_token) {
        this.wanikaniClient = axios_1.default.create({
            baseURL: constants_1.baseURL,
            timeout: 1000,
        });
        this.assignments = new resources_1.Assignments(this.wanikaniClient);
        this.levelProgressions = new resources_1.LevelProgressions(this.wanikaniClient);
        this.resets = new resources_1.Resets(this.wanikaniClient);
        this.reviews = new resources_1.Reviews(this.wanikaniClient);
        this.reviewStatistics = new resources_1.ReviewStatistics(this.wanikaniClient);
        this.spacedRepetitionSystems = new resources_1.SpacedRepetitionSystems(this.wanikaniClient);
        this.studyMaterials = new resources_1.StudyMaterials(this.wanikaniClient);
        this.subjects = new resources_1.Subjects(this.wanikaniClient);
        this.summary = new resources_1.Summary(this.wanikaniClient);
        this.user = new resources_1.User(this.wanikaniClient);
        this.voiceActors = new resources_1.VoiceActors(this.wanikaniClient);
        this.wanikaniClient.defaults.headers.common['Authorization'] = 'Bearer ' + api_token;
    }
}
exports.WaniKani = WaniKani;
