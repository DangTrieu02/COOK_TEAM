"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../data-source"));
const post_1 = require("../entity/post");
const typeorm_1 = require("typeorm");
class PostService {
    constructor() {
        this.getPostUserAndFriend = async (UserId, friendId) => {
            let posts = await this.postRepository.find({
                relations: {
                    user: true,
                    likes: true,
                }, where: {
                    user: {
                        id: (0, typeorm_1.In)([UserId, friendId])
                    }
                }
            });
            return posts;
        };
        this.getPostToUser = async (UserId) => {
            let post = await this.postRepository.find({
                relations: {
                    user: true,
                    likes: true,
                }, where: {
                    user: {
                        id: UserId
                    }
                }
            });
            return post;
        };
        this.addPost = async (post) => {
            await this.postRepository.save(post);
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
        console.log(isHasFriend);
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
            return await this.postRepository.query(`
            select post.* , user.name, user.avatar from post
            join user on post.userId = user.id
            where post.userId = ${user}`);
        }
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map