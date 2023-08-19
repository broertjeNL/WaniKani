export const subjects = ['kana_vocabulary', 'kanji', 'radical', 'vocabulary'] as const;
export const audioTypes = ['audio/mpeg', 'audio/ogg'] as const;
export const readingClassifications = ['kunyomi', 'nanori', 'onyomi'] as const;
export const auxiliaryMeaningTypes = ['whitelist', 'blacklist'] as const;
export const objects = subjects;
export const intervalUnits = ['milliseconds', 'seconds', 'minutes', 'hours', 'days', 'weeks', 'months'] as const;
export const lessonOrderings = ['ascending_level_then_subject', 'shuffled', 'ascending_level_then_shuffled'] as const;
export const reviewOrderings = ['shuffled', 'lower_levels_first'] as const;
export const subscriptionTypes = ['free', 'recurring', 'lifetime'] as const;
export const voiceActorGenders = ['male', 'female'] as const;
export const singularResourceTypes = [
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
] as const;
export const objectTypes = ['collection', 'report'] as const;
export const baseURL = 'https://api.wanikani.com/v2/';
