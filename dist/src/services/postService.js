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
        this.getAllPost = async (UserId) => {
            let posts = await this.postRepository.find({
                relations: {
                    user: true,
                    likes: true,
                }, where: {
                    user: {
                        id: (0, typeorm_1.In)([UserId, 4])
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
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map