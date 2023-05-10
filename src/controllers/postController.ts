import postService from "../services/postService";
import {Request, Response} from "express";
import likeService from "../services/likeService";
import AppDataSource from "../data-source";
import {Likepost} from "../entity/likepost";
import { getToken } from "./base";
import friendService from "../services/friendService";

export class PostController {
    private postService;
    private likeService;

    constructor() {
        this.postService = postService;
        this.likeService = likeService;
    }

    findAll = async (req: Request, res: Response) => {
        let token = await getToken(req, res);
        let isHasFriend = await friendService.isHasFriend(token.id)
        let listPost = await this.postService.getPost(token.id,isHasFriend)
        res.status(200).json(listPost)
    }

    findToUser = async (req: Request, res: Response) => {
        let token = getToken(req, res)
        let userId = token.id
        try {
            let listPostToUser = await this.postService.getPostToUser(userId)
            let totalLikes = []
            for (let item of listPostToUser) {
                const postId = item.id
                console.log(postId, "postID")
                const likes = await this.likeService.getLikeToPost(postId)
                totalLikes.push(likes)
            }
            console.log('totalLike', totalLikes)
            res.status(200).json({
                listPostToUser,
                totalLikes
            })
        } catch (error) {
            console.error(error);
            res.status(400).json({message: 'Internal server error'});
        }
    }
    addPostToUser = async (req: Request, res: Response) => {
        let token = getToken(req, res)
        let userId = token.id
        let post = req.body
        post.user = userId
        if (post.postContent || post.postImage) {
            await this.postService.addPost(post)
            res.status(200).json({
                message: 'Post is successfully'
            })
        } else {
            res.status(400).json({
                message: 'Post must have content or images'
            })
        }
    }

    updatePostToUser = async (req: Request, res: Response) => {
        console.log(req['decode'])
        let id = req.params.id;
        console.log("id update : ", id)
        let postNow = req.body;
        if (!id) {
            res.status(400).json({
                message: "Post id not available"
            })
        } else {
            await this.postService.updatePost(id, postNow);
            res.status(200).json({
                message: "Update successfully "
            })
        }
    }
    updateLike = async (req: Request, res: Response) => {
        try {
            const token = getToken(req, res);
            const userId = token.id;
            const postId = parseInt(req.params.id)
            console.log(userId, 'userId')
            console.log(postId, 'postId')
            const like = await this.likeService.findUserIdandPostId(userId, postId)
            console.log(like, "like")
            // Toggle the isLiked status
            like.isLiked = (like.isLiked === 0) ? 1 : 0;
            console.log(like, "like2")
            await AppDataSource.getRepository(Likepost).save(like);

            res.status(200).json({
                message: 'Update like successfully',
                data: {isLiked: like.isLiked},
            });
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: 'Internal server error',
            });
        }
    };
    deletePostToUser = async (req: Request, res: Response) => {
        let id = req.params.id;
        console.log("id del : ", id)
        if (!id) {
            res.status(400).json({
                message: "Post id not available"
            })
        } else {
            await this.postService.removePost(id);
            res.status(200).json({
                message: "Delete successfully "
            })
        }
    }

    findOne=async(req:Request,res:Response)=>{
        let idPost = req.query.id
        let post = await this.postService.findOne(idPost);
        res.status(200).json(post)
    }


}

export default new PostController()