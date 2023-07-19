"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseURL = exports.objectTypes = exports.singularResourceTypes = exports.voiceActorGenders = exports.subscriptionTypes = exports.reviewOrderings = exports.lessonOrderings = exports.intervalUnits = exports.objects = exports.auxiliaryMeaningTypes = exports.readingClassifications = exports.audioTypes = exports.subjects = void 0;
exports.subjects = ['kana_vocabulary', 'kanji', 'radical', 'vocabulary'];
exports.audioTypes = ['audio/mpeg', 'audio/ogg'];
exports.readingClassifications = ['kunyomi', 'nanori', 'onyomi'];
exports.auxiliaryMeaningTypes = ['whitelist', 'blacklist'];
exports.objects = exports.subjects;
exports.intervalUnits = ['milliseconds', 'seconds', 'minutes', 'hours', 'days', 'weeks'];
exports.lessonOrderings = ['ascending_level_then_subject', 'shuffled', 'ascending_level_then_shuffled'];
exports.reviewOrderings = ['shuffled', 'lower_levels_first'];
exports.subscriptionTypes = ['free', 'recurring', 'lifetime'];
exports.voiceActorGenders = ['male', 'female'];
exports.singularResourceTypes = [
    'assignment',
    'kana_vocabulary',
    'kanji',
    'level_progression',
    'radical',
    'reset',
    'review_statistic',
    'review',
    'spaced_repetition_system',
    'study_material',
    'user',
    'vocabulary',
    'voice_actor',
];
exports.objectTypes = ['collection', 'report'];
exports.baseURL = 'https://api.wanikani.com/v2/';
