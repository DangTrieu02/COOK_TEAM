"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../data-source"));
const friend_1 = require("../entity/friend");
class FriendService {
    constructor() {
        this.friendRepository = data_source_1.default.getRepository(friend_1.Friend);
    }
    async getAll() {
        return (await this.friendRepository.find());
    }
    async create(user, friend) {
        await this.friendRepository.save({ user: user, friend: friend });
    }
}
exports.default = new FriendService();
//# sourceMappingURL=friendService.js.map