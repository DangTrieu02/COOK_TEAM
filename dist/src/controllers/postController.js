"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postService_1 = __importDefault(require("../services/postService"));
const base_1 = require("./base");
const friendService_1 = __importDefault(require("../services/friendService"));
class PostController {
    constructor() {
        this.findAll = async (req, res) => {
            let token = await (0, base_1.getToken)(req, res);
            let isHasFriend = await friendService_1.default.isHasFriend(token.id);
            let listPost = await this.postService.getPost(token.id, isHasFriend);
            res.status(200).json(listPost);
        };
        this.addPostToUser = async (req, res) => {
            let post = req.body;
            post.user = await (0, base_1.getToken)(req, res);
            console.log("post:", post);
            if (post.postContent || post.postImage) {
                await this.postService.addPost(post);
                res.status(200).json({
                    message: 'Post is successfully'
                });
            }
            else {
                res.status(400).json({
                    message: 'Post must have content or images'
                });
            }
        };
        this.updatePostToUser = async (req, res) => {
            let id = req.params.id;
            console.log("id update : ", id);
            let postNow = req.body;
            if (!id) {
                res.status(400).json({
                    message: "Post id not available"
                });
            }
            else {
                await this.postService.updatePost(id, postNow);
                res.status(200).json({
                    message: "Update successfully "
                });
            }
        };
        this.deletePostToUser = async (req, res) => {
            let id = req.params.id;
            console.log("id del : ", id);
            if (!id) {
                res.status(400).json({
                    message: "Post id not available"
                });
            }
            else {
                await this.postService.removePost(id);
                res.status(200).json({
                    message: "Delete successfully "
                });
            }
        };
        this.postService = postService_1.default;
    }
}
exports.PostController = PostController;
exports.default = new PostController();
//# sourceMappingURL=postController.js.map