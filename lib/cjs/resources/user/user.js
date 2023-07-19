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
exports.User = void 0;
/**
 * The user summary returns basic information for the user making the API request, identified by their API key.
 * */
class User {
    constructor(wanikaniClient) {
        this.wanikaniClient = wanikaniClient;
    }
    /**
     * Returns a summary of user information.
     * */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient('user');
            return data;
        });
    }
    /**
     * Returns an updated summary of user information.
     * */
    update(preferences) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = yield this.wanikaniClient.put('user', { user: { preferences } });
            return data;
        });
    }
}
exports.User = User;
