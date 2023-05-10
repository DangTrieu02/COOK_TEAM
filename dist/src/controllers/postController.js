"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const postService_1 = __importDefault(require("../services/postService"));
const likeService_1 = __importDefault(require("../services/likeService"));
const data_source_1 = __importDefault(require("../data-source"));
const likepost_1 = require("../entity/likepost");
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
        this.findToUser = async (req, res) => {
            let token = (0, base_1.getToken)(req, res);
            let userId = token.id;
            try {
                let listPostToUser = await this.postService.getPostToUser(userId);
                let totalLikes = [];
                for (let item of listPostToUser) {
                    const postId = item.id;
                    console.log(postId, "postID");
                    const likes = await this.likeService.getLikeToPost(postId);
                    totalLikes.push(likes);
                }
                console.log('totalLike', totalLikes);
                res.status(200).json({
                    listPostToUser,
                    totalLikes
                });
            }
            catch (error) {
                console.error(error);
                res.status(400).json({ message: 'Internal server error' });
            }
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
            try {
                const token = (0, base_1.getToken)(req, res);
                const userId = token.id;
                const postId = parseInt(req.params.id);
                console.log(userId, 'userId');
                console.log(postId, 'postId');
                const like = await this.likeService.findUserIdandPostId(userId, postId);
                console.log(like, "like");
                like.isLiked = (like.isLiked === 0) ? 1 : 0;
                console.log(like, "like2");
                await data_source_1.default.getRepository(likepost_1.Likepost).save(like);
                res.status(200).json({
                    message: 'Update like successfully',
                    data: { isLiked: like.isLiked },
                });
            }
            catch (err) {
                console.error(err);
                res.status(400).json({
                    message: 'Internal server error',
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
        this.findOne = async (req, res) => {
            let idPost = req.query.id;
            let post = await this.postService.findOne(idPost);
            res.status(200).json(post);
        };
        this.postService = postService_1.default;
        this.likeService = likeService_1.default;
    }
}
exports.PostController = PostController;
exports.default = new PostController();
//# sourceMappingURL=postController.js.map