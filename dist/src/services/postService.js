"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../data-source"));
const post_1 = require("../entity/post");
class PostService {
    constructor() {
        this.getAllPost = async () => {
            let post = await this.postRepository.find({
                relations: {
                    user: true
                }
            });
            return post;
        };
        this.addPost = async (post) => {
            await this.postRepository.save(post);
        };
        this.findOne = async (post) => {
            return await this.postRepository.find({
                relations: { user: true },
                where: { id: post }
            });
        };
        this.updatePost = async (id, updateNow) => {
            await this.postRepository.update({ id: id }, updateNow);
        };
        this.removePost = async (id) => {
            await this.postRepository.delete({ id: id });
        };
        this.postRepository = data_source_1.default.getRepository(post_1.Post);
    }
    async getPost(user, isHasFriend) {
        if (isHasFriend) {
            return await this.postRepository.query(`
            SELECT DISTINCT p.*, u.name , u.avatar
            FROM post p
            JOIN user u ON p.userId = u.id
            JOIN friend f ON p.userId = f.friendId  OR p.userId = f.userId and f.status='bạn bè'
            WHERE u.id = ${user} OR (f.userId = ${user} OR f.friendId = ${user})
            ORDER BY p.time DESC;
            `);
        }
        else {
            let a = await this.postRepository
                .createQueryBuilder("post")
                .leftJoinAndSelect("post.likes", "likes")
                .leftJoinAndSelect("post.user", "user")
                .where(`post.userId = ${user}`)
                .getMany();
            return a;
        }
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map