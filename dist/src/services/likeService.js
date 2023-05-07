"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../data-source"));
const like_1 = require("../entity/like");
class likeService {
    constructor() {
        this.likePostRepository = data_source_1.default.getRepository(like_1.Likepost);
    }
    async getAll(post) {
        return await this.likePostRepository.find({
            relations: {
                user: true,
                post: true
            },
            where: { post: { id: post } }
        });
    }
    async likeOrNot(user, post) {
        return await this.likePostRepository.find({
            relations: {
                user: true
            },
            where: {
                post: { id: post },
                user: { id: user }
            }
        });
    }
    async createLike(user, post) {
        await this.likePostRepository.save({ user: user, post: post });
    }
    async remove(user, post) {
        const likeToDelete = await this.likePostRepository.findOne({ where: { user: { id: user }, post: { id: post } } });
        await this.likePostRepository.delete(likeToDelete);
    }
}
exports.default = new likeService();
//# sourceMappingURL=likeService.js.map