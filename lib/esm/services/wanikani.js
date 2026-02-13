"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaniKani = void 0;
const resources_1 = require("../resources");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const qs = __importStar(require("qs"));
class WaniKani {
    wanikaniClient;
    assignments;
    levelProgressions;
    resets;
    reviews;
    reviewStatistics;
    spacedRepetitionSystems;
    studyMaterials;
    subjects;
    summary;
    user;
    voiceActors;
    constructor(api_token) {
        this.wanikaniClient = axios_1.default.create({
            baseURL: constants_1.baseURL,
            timeout: 1000,
            headers: {
                Authorization: 'Bearer ' + api_token,
            },
            paramsSerializer: {
                serialize: (params) => qs.stringify(params, { arrayFormat: 'comma' }),
                indexes: null,
            },
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
    }
}
exports.WaniKani = WaniKani;
