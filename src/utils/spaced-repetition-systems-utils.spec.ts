import { getIntervalInSeconds } from './spaced-repetition-systems-utils';
import { SpacedRepetitionSystem } from '../resources';

const mockSrs: SpacedRepetitionSystem = {
    burning_stage_position: 0,
    created_at: new Date(),
    description: 'SRS for unit tests',
    name: 'mockSrs',
    passing_stage_position: 0,
    stages: [
        {
            interval: undefined,
            position: 0,
            interval_unit: undefined,
        },
        {
            interval: 4,
            position: 1,
            interval_unit: 'hours',
        },
        {
            interval: 8,
            position: 2,
            interval_unit: 'hours',
        },
        {
            interval: 1,
            position: 3,
            interval_unit: 'days',
        },
        {
            interval: 2,
            position: 4,
            interval_unit: 'days',
        },
        {
            interval: 1,
            position: 5,
            interval_unit: 'weeks',
        },
        {
            interval: 2,
            position: 6,
            interval_unit: 'weeks',
        },
        {
            interval: 1,
            position: 7,
            interval_unit: 'months',
        },
        {
            interval: 4,
            position: 8,
            interval_unit: 'months',
        },
        {
            interval: undefined,
            position: 9,
            interval_unit: undefined,
        },
    ],
    starting_stage_position: 0,
    unlocking_stage_position: 0,
};

describe('spaced-repetition-systems-utils', () => {
    describe('getIntervalInSeconds', () => {
        it.each`
            stage                | result
            ${mockSrs.stages[0]} | ${0}
            ${mockSrs.stages[1]} | ${14400}
            ${mockSrs.stages[2]} | ${28800}
            ${mockSrs.stages[3]} | ${86400}
            ${mockSrs.stages[4]} | ${172800}
            ${mockSrs.stages[5]} | ${604800}
            ${mockSrs.stages[6]} | ${1209600}
            ${mockSrs.stages[7]} | ${2419200}
            ${mockSrs.stages[8]} | ${9676800}
            ${mockSrs.stages[9]} | ${0}
        `('should $result given $stage', ({ stage, result }) => {
            expect(getIntervalInSeconds(stage)).toBe(result);
        });
    });
});
