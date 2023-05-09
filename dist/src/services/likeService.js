"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../data-source"));
const likepost_1 = require("../entity/likepost");
class likeService {
    constructor() {
        this.getLikeToPost = async (postId) => {
            const sqlQuery = `select count(isLiked) as 'totalLike'
                          from \`likepost\`
                          where postId = ?
                            and isLiked = 1`;
            const postLike = await this.likePostRepository.query(sqlQuery, [postId]);
            return postLike;
        };
        this.findUserIdandPostId = async (userId, postId) => {
            const sqQuery = `select * from \`likepost\` where userId=?`;
            const postLike = await this.likePostRepository.query(sqQuery, [userId, postId]);
            return postLike[0];
        };
        this.likePostRepository = data_source_1.default.getRepository(likepost_1.Likepost);
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
        await this.likePostRepository.remove(likeToDelete);
    }
    async getLikesByUserId(id) {
        return await this.likePostRepository.find({
            relations: { post: true },
            where: { user: id }
        });
    }
}
exports.default = new likeService();
//# sourceMappingURL=likeService.js.map