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
        return (await this.friendRepository.find({
            relations: {
                user: true,
                friend: true
            }
        }));
    }
    async waitList(friend) {
        return (await this.friendRepository.find({
            relations: {
                user: true,
                friend: true
            },
            where: { friend: { id: friend.id }, status: "not" }
        }));
    }
    async create(user, friend) {
        await this.friendRepository.save({ user: user, friend: friend });
    }
    async confirm(id) {
        await this.friendRepository.update(id, { status: 'bạn bè' });
    }
    async remove(id) {
        await this.friendRepository.delete({ id });
    }
}
exports.default = new FriendService();
//# sourceMappingURL=friendService.js.map