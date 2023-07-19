"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
/**
 * The summary report contains currently available lessons and reviews and the reviews that will become available in the next 24 hours, grouped by the hour.
 */
class Summary {
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Retrieves a summary report.
     * */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient('summary');
            return data;
        });
    }
}
exports.Summary = Summary;
