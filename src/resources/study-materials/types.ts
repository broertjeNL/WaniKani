import { SubjectType } from '../subjects';
import { CollectionApiResponse, ResourceApiResponse } from '../../services';

export type StudyMaterialsCollectionResponse = CollectionApiResponse<StudyMaterialsResourceResponse>;
export type StudyMaterialsResourceResponse = ResourceApiResponse<StudyMaterialData, 'study_material'>;

/**
 * Study Material Data Structure
 */
export interface StudyMaterialData {
    /**
     * Timestamp when the study material was created.
     */
    created_at: Date;
    /**
     * Indicates if the associated subject has been hidden, preventing it from appearing in lessons or reviews.
     */
    hidden: boolean;
    /**
     * Free form note related to the meaning(s) of the associated subject.
     */
    meaning_note?: string;
    /**
     * Synonyms for the meaning of the subject. These are used as additional correct answers during reviews.
     */
    meaning_synonyms: string[];
    /**
     * Free form note related to the reading(s) of the associated subject.
     */
    reading_note?: string;
    /**
     * Unique identifier of the associated {@link Subjects|subject}.
     */
    subject_id: number;
    /**
     * The type of the associated {@link Subjects|subject}, one of: kana_vocabulary, kanji, radical, or vocabulary.
     */
    subject_type: SubjectType;
}

/**
 * The collection of study material records will be filtered on the parameters provided.
 */
export interface StudyMaterialParams {
    /**
     * Return study materials with a matching value in the hidden attribute
     */
    hidden?: boolean;
    /**
     * Only study material records where data.id matches one of the array values are returned.
     */
    ids?: number[];
    /**
     * Only study material records where data.subject_id matches one of the array values are returned.
     */
    subject_ids?: number[];
    /**
     * Only study material records where data.subject_type matches one of the array values are returned. Valid values are: kana_vocabulary, kanji, radical, or vocabulary.
     */
    subject_types?: SubjectType[];
    /**
     * Only study material records updated after this time are returned.
     */
    updated_after?: Date;
}

export interface StudyMaterialCreateParams {
    /**
     * Unique identifier of the subject.
     */
    subject_id: number;
    /**
     * Meaning notes specific for the subject.
     */
    meaning_note?: string;
    /**
     * Reading notes specific for the subject.
     */
    reading_note?: string;
    /**
     * Meaning synonyms for the subject.
     */
    meaning_synonyms?: string[];
}

export interface StudyMaterialUpdateParams {
    /**
     * Meaning notes specific for the subject.
     */
    meaning_note?: string;
    /**
     * Reading notes specific for the subject.
     */
    reading_note?: string;
    /**
     * Meaning synonyms for the subject.
     */
    meaning_synonyms?: string[];
}
