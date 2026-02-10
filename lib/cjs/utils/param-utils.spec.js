"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const param_utils_1 = require("./param-utils");
describe('param-utils', () => {
    describe('cleanParams', () => {
        it.each `
            input                | result
            ${{ a: undefined }}  | ${{}}
            ${{ a: 'a' }}        | ${{ a: 'a' }}
            ${{ a: { b: 'b' } }} | ${{ a: { b: 'b' } }}
        `('should return $result given $input', ({ input, result }) => {
            (0, globals_1.expect)((0, param_utils_1.cleanParams)(input)).toEqual(result);
        });
    });
});
