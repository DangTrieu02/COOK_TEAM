"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../data-source"));
const like_1 = require("../entity/like");
class LikeService {
    constructor() {
        this.getLikeToPost = async (postId) => {
            const sqlQuery = `select count(isLiked) as 'totalLike'
                          from \`like\`
                          where postId = ?
                            and isLiked = 1`;
            const postLike = await this.likeRepository.query(sqlQuery, [postId]);
            return postLike;
        };
        this.findUserIdandPostId = async (userId, postId) => {
            let postLike = await this.likeRepository.findOneOrFail({
                where: { user: userId, post: postId },
            });
            return postLike[0];
        };
        this.likeRepository = data_source_1.default.getRepository(like_1.Like);
    }
}
exports.default = new LikeService();
//# sourceMappingURL=likeService.js.map