"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanParams = void 0;
const cleanParams = (params) => Object.entries(params).reduce((acc, curr) => ({
    ...acc,
    ...(curr[1] && { [curr[0]]: curr[1] }),
}), {});
exports.cleanParams = cleanParams;
