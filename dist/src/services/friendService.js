"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = __importDefault(require("../data-source"));
const friend_1 = require("../entity/friend");
class FriendService {
    constructor() {
        this.friendRepository = data_source_1.default.getRepository(friend_1.Friend);
        this.userRepository = data_source_1.default.getRepository(user_1.User);
    }
    async getAll() {
        return (await this.friendRepository.find({
            relations: {
                user: true,
                friend: true
            }
        }));
    }
    async getFriends(id) {
        let friend = await this.userRepository.query(`
    SELECT user.*
    FROM user
    JOIN friend ON (friend.friendId = user.id AND friend.userId = ${id} AND friend.status = 'bạn bè')
    OR (friend.userId = user.id AND friend.friendId = ${id} AND friend.status = 'bạn bè')
    WHERE user.id != ${id}`);
        return friend;
    }
    async getFriend(id) {
        const friends = await this.friendRepository.find({
            where: [
                { user: { id }, status: 'bạn bè' },
                { friend: { id }, status: 'bạn bè' }
            ],
            relations: ['user', 'friend']
        });
        return friends;
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