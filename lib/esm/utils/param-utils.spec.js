import { expect } from '@jest/globals';
import { cleanParams } from './param-utils';
describe('param-utils', () => {
    describe('cleanParams', () => {
        it.each `
            input                | result
            ${{ a: undefined }}  | ${{}}
            ${{ a: 'a' }}        | ${{ a: 'a' }}
            ${{ a: { b: 'b' } }} | ${{ a: { b: 'b' } }}
        `('should return $result given $input', ({ input, result }) => {
            expect(cleanParams(input)).toEqual(result);
        });
    });
});
