"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanParams = void 0;
const cleanParams = (params) => Object.entries(params).reduce((acc, curr) => (Object.assign(Object.assign({}, acc), (curr[1] && { [curr[0]]: Array.isArray(curr[1]) ? curr[1].join(',') : curr[1] }))), {});
exports.cleanParams = cleanParams;
