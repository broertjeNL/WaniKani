import { audioTypes, auxiliaryMeaningTypes, readingClassifications, subjects } from '../../constants';
import { CollectionApiResponse, ResourceApiResponse } from '../../services';

export type SubjectCollectionApiResponse<
    T extends _Subjects = _Subjects,
    U extends SubjectType = SubjectType,
> = CollectionApiResponse<SubjectResourceApiResponse<T, U>>;
export type SubjectResourceApiResponse<T extends _Subjects, U extends SubjectType> = ResourceApiResponse<T, U>;

export type SubjectType = (typeof subjects)[number];
export type Radical = SubjectData<RadicalAttributes>;
export type Kanji = SubjectData<KanjiAttributes>;
export type Vocabulary = SubjectData<VocabularyAttributes>;
export type KanaVocabulary = SubjectData<KanaVocabularyAttributes>;
export type _Subjects = Radical | Kanji | Vocabulary | KanaVocabulary;

/**
 * Subject Data Structure
 *
 * The exact structure of a subject depends on the subject type. The available subject types are kana_vocabulary, kanji, radical, and vocabulary. Note that any attributes called out for the specific subject type behaves differently than the common attribute of the same name.
 */
export type SubjectData<
    T extends RadicalAttributes | KanjiAttributes | VocabularyAttributes | KanaVocabularyAttributes,
> = {
    /**
     * Collection of auxiliary meanings. See table below for the object structure.
     */
    auxiliary_meanings: AuxiliaryMeaning[];
    /**
     * The UTF-8 characters for the subject, including kanji and hiragana.
     */
    characters: string;
    /**
     * Timestamp when the subject was created.
     */
    created_at: Date;
    /**
     * A URL pointing to the page on wanikani.com that provides detailed information about this subject.
     */
    document_url: string;
    /**
     * Timestamp when the subject was hidden, indicating associated assignments will no longer appear in lessons or reviews and that the subject page is no longer visible on wanikani.com.
     */
    hidden_at?: Date;
    /**
     * The position that the subject appears in lessons. Note that the value is scoped to the level of the subject, so there are duplicate values across levels.
     */
    lesson_position: number;
    /**
     * The level of the subject, from 1 to 60.
     */
    level: number;
    /**
     * The subject's meaning mnemonic.
     */
    meaning_mnemonic: string;
    /**
     * The subject meanings. See table below for the object structure.
     */
    meanings: Meaning[];
    /**
     * The string that is used when generating the document URL for the subject. Radicals use their meaning, downcased. Kanji and vocabulary use their characters.
     */
    slug: string;
    /**
     * Unique identifier of the associated {@link SpacedRepetitionSystems|spaced_repetition_system}.
     */
    spaced_repetition_system_id: number;
} & T;
export type RadicalAttributes = {
    /**
     * An array of numeric identifiers for the kanji that have the radical as a component.
     */
    amalgamation_subject_ids: number[];
    /**
     * Unlike kanji and vocabulary, radicals can have a null value for characters. Not all radicals have a UTF entry, so the radical must be visually represented with an image instead.
     */
    characters?: string;
    /**
     * A collection of images of the radical. See table below for the object structure.
     */
    character_images: CharacterImage[];
};
export type KanjiAttributes = {
    /**
     * An array of numeric identifiers for the vocabulary that have the kanji as a component.
     */
    amalgamation_subject_ids: number[];
    /**
     * An array of numeric identifiers for the radicals that make up this kanji. Note that these are the subjects that must have passed assignments in order to unlock this subject's assignment.
     */
    component_subject_ids: number[];
    /**
     * Meaning hint for the kanji.
     */
    meaning_hint?: string;
    /**
     * Reading hint for the kanji.
     */
    reading_hint?: string;
    /**
     * The kanji's reading mnemonic.
     */
    reading_mnemonic: string;
    /**
     * Selected readings for the kanji. See table below for the object structure.
     */
    readings: KanjiReading[];
    /**
     * An array of numeric identifiers for kanji which are visually similar to the kanji in question.
     */
    visually_similar_subject_ids: number[];
};
export type VocabularyAttributes = {
    /**
     * An array of numeric identifiers for the kanji that make up this vocabulary. Note that these are the subjects that must be have passed assignments in order to unlock this subject's assignment.
     */
    component_subject_ids: number[];
    /**
     * A collection of context sentences. See table below for the object structure.
     */
    context_sentences: ContextSentence[];
    /**
     * The subject's meaning mnemonic.
     */
    meaning_mnemonic: string;
    /**
     * Parts of speech.
     */
    parts_of_speech: string[];
    /**
     * A collection of pronunciation audio. See table below for the object structure.
     */
    pronunciation_audios: PronunciationAudio[];
    /**
     * Selected readings for the vocabulary. See table below for the object structure.
     */
    readings: Reading[];
    /**
     * The subject's reading mnemonic.
     */
    reading_mnemonic: string;
};
export type KanaVocabularyAttributes = {
    /**
     * A collection of context sentences. See table below for the object structure.
     */
    context_sentences: ContextSentence[];
    /**
     * The subject's meaning mnemonic.
     */
    meaning_mnemonic: string;
    /**
     * Parts of speech.
     */
    parts_of_speech: string[];
    /**
     * A collection of pronunciation audio. See table below for the object structure.
     */
    pronunciation_audios: PronunciationAudio[];
};
/**
 * Meaning Object Attributes
 */
export type Meaning = {
    /**
     * A singular subject meaning.
     */
    meaning: string;
    /**
     * Indicates priority in the WaniKani system.
     */
    primary: boolean;
    /**
     * Indicates if the meaning is used to evaluate user input for correctness.
     */
    accepted_answer: boolean;
};
export type AuxiliaryMeaningType = (typeof auxiliaryMeaningTypes)[number];
/**
 * Auxiliary Meaning Object Attributes
 */
export type AuxiliaryMeaning = {
    /**
     * A singular subject meaning.
     */
    meaning: string;
    /**
     * Either whitelist or blacklist. When evaluating user input, whitelisted meanings are used to match for correctness. Blacklisted meanings are used to match for incorrectness.
     */
    type: AuxiliaryMeaningType;
};

/**
 * Character Image Object Attributes
 */
export type CharacterImage = {
    /**
     * The location of the image.
     */
    url: string;
    /**
     * The content type of the image. Currently, the API delivers image/png and image/svg+xml.
     */
    content_type: string;
    /**
     * Details about the image. Each content_type returns a uniquely structured object.
     */
    metadata: CharacterImageMetadata;
};

export type CharacterImageMetadata = SVG | PNG;

export type SVG = {
    /**
     * The SVG asset contains built-in CSS styling
     */
    inline_styles: boolean;
};

export type PNG = {
    /**
     * Color of the asset in hexadecimal
     */
    color: string;
    /**
     * Dimension of the asset in pixels
     */
    dimensions: string;
    /**
     * A name descriptor
     */
    style_name: string;
};

/**
 * @augments Reading
 */
export type KanjiReading = Reading & {
    /**
     * The kanji reading's classfication: kunyomi, nanori, or onyomi.
     */
    type: ReadingClassification;
};
export type ReadingClassification = (typeof readingClassifications)[number];
export type Reading = {
    /**
     * A singular subject reading.
     */
    reading: string;
    /**
     * Indicates priority in the WaniKani system.
     */
    primary: boolean;
    /**
     * Indicates if the reading is used to evaluate user input for correctness.
     */
    accepted_answer: boolean;
};

export type ContextSentence = {
    /**
     * English translation of the sentence
     */
    en: string;
    /**
     * Japanese context sentence
     */
    ja: string;
};

export type AudioType = (typeof audioTypes)[number];
export type PronunciationAudio = {
    /**
     * The location of the audio.
     */
    url: string;
    /**
     * The content type of the audio. Currently, the API delivers audio/mpeg and audio/ogg.
     */
    content_type: AudioType;
    /**
     * Details about the pronunciation audio. See table below for details.
     */
    metadata: AudioMetadata;
};

export type AudioMetadata = {
    /**
     * The gender of the voice actor.
     */
    gender: string;
    /**
     * A unique ID shared between same source pronunciation audio.
     */
    source_id: number;
    /**
     * Vocabulary being pronounced in kana.
     */
    pronunciation: string;
    /**
     * A unique ID belonging to the voice actor.
     */
    voice_actor_id: number;
    /**
     * Humanized name of the voice actor.
     */
    voice_actor_name: string;
    /**
     * Description of the voice.
     */
    voice_description: string;
};

export type SubjectResponse = Radical | Kanji | Vocabulary | KanaVocabulary;

/**
 * The collection of subjects will be filtered on the parameters provided.
 */
export type SubjectParameters = {
    /**
     * Only subjects where data.id matches one of the array values are returned.
     */
    ids?: number;
    /**
     * Return subjects of the specified types.
     */
    types?: SubjectType[];
    /**
     * Return subjects of the specified slug.
     */
    slugs?: string[];
    /**
     * Return subjects at the specified levels.
     */
    levels?: number[];
    /**
     * Return subjects which are or are not hidden from the user-facing application.
     */
    hidden?: boolean;
    /**
     * Only subjects updated after this time are returned.
     */
    updated_after?: Date;
};
