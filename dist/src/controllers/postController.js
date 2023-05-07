"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postService_1 = __importDefault(require("../services/postService"));
const base_1 = require("./base");
const likeService_1 = __importDefault(require("../services/likeService"));
const data_source_1 = __importDefault(require("../data-source"));
const like_1 = require("../entity/like");
class PostController {
    constructor() {
        this.findAll = async (req, res) => {
            try {
                let listPost = await this.postService.getAllPost();
                console.log(listPost, "listPost");
                let totalLikes = [];
                for (let item of listPost) {
                    const postId = item.id;
                    const likes = await this.likeService.getLikeToPost(postId);
                    totalLikes.push(likes);
                }
                console.log('totoLike', totalLikes);
                res.status(200).json({
                    listPost,
                    totalLikes
                });
            }
            catch (error) {
                console.error(error);
                res.status(400).json({ message: 'Internal server error' });
            }
        };
        this.findToUser = async (req, res) => {
            let token = (0, base_1.getToken)(req, res);
            let userId = token.id;
            let listPostToUser = await this.postService.getPostToUser(userId);
            res.status(200).json(listPostToUser);
        };
        this.addPostToUser = async (req, res) => {
            let token = (0, base_1.getToken)(req, res);
            let userId = token.id;
            let post = req.body;
            post.user = userId;
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
            console.log(req['decode']);
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
        this.updateLike = async (req, res) => {
            let token = (0, base_1.getToken)(req, res);
            let IdUser = token.id;
            console.log(IdUser, 'idUser');
            console.log(await data_source_1.default.createQueryBuilder()
                .update(like_1.Like)
                .set({ isLiked: 1 })
                .where("userId = :id", { id: IdUser })
                .andWhere("statusOrder = 0")
                .execute());
            res.status(200).json({
                message: "Update like successfully "
            });
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
        this.likeService = likeService_1.default;
    }
}
exports.PostController = PostController;
exports.default = new PostController();
//# sourceMappingURL=postController.js.map