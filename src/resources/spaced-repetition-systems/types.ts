import { intervalUnits } from '../../constants';
import { CollectionApiResponse, ResourceApiResponse } from '../../services';

export type SpacedRepetitionSystemCollectionResponse = CollectionApiResponse<SpacedRepetitionSystemResponse>;
export type SpacedRepetitionSystemResponse = ResourceApiResponse<SpacedRepetitionSystem, 'spaced_repetition_system'>;

/**
 * Spaced Repetition System Data Structure
 */
export interface SpacedRepetitionSystem {
    /**
     * position of the burning stage.
     */
    burning_stage_position: number;
    /**
     * Timestamp when the spaced_repetition_system was created.
     */
    created_at: Date;
    /**
     * Details about the spaced repetition system.
     */
    description: string;
    /**
     * The name of the spaced repetition system
     */
    name: string;
    /**
     * position of the passing stage.
     */
    passing_stage_position: number;
    /**
     * A collection of stages. See table below for the object structure.
     */
    stages: Stage[];
    /**
     * position of the starting stage.
     */
    starting_stage_position: number;
    /**
     * position of the unlocking stage.
     */
    unlocking_stage_position: number;
}

/**
 * Stage Data Structure
 */
export interface Stage {
    /**
     * The length of time added to the time of review registration, adjusted to the beginning of the hour.
     */
    interval?: number;
    /**
     * Unit of time. Can be the following: milliseconds, seconds, minutes, hours, days, and weeks.
     */
    interval_unit?: IntervalUnit;
    /**
     * The position of the stage within the continuous order.
     */
    position: number;
}

/**
 * Unit of time. Can be the following: milliseconds, seconds, minutes, hours, days, and weeks.
 */
export type IntervalUnit = (typeof intervalUnits)[number];

/**
 * The collection of spaced_repetition_systems will be filtered on the parameters provided.
 */
export interface SpacedRepetitionsParams {
    /**
     * Only spaced_repetition_systems where data.id matches one of the array values are returned.
     */
    ids?: number[];
    /**
     * Only spaced_repetition_systems updated after this time are returned.
     */
    updated_after?: Date;
}
