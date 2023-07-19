"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileExists = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const fileExists = (file = 'output.json', folder = './output') => {
    const filePath = path_1.default.resolve(folder, file);
    return fs_1.default.existsSync(filePath);
};
exports.fileExists = fileExists;
