import postService from "../services/postService";
import {Request, Response} from "express";
import {getToken} from "./base";
import likeService from "../services/likeService";

export class PostController {
    private postService;
    private likeService;

    constructor() {
        this.postService = postService;
        this.likeService = likeService;
    }

    findAll = async (req: Request, res: Response) => {
        let token = getToken(req,res)
        let userId = token.id
        try {
            let listPost = await this.postService.getAllPost(userId)
            console.log(listPost,"listPost")
            let totalLikes = []
            for (let item of listPost) {
                const postId = item.id
                console.log(postId,"postID")
                const likes = await this.likeService.getLikeToPost(postId)
                totalLikes.push(likes)
            }
            console.log('totoLike',totalLikes)
            res.status(200).json({
                listPost,
                totalLikes
            })

        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'Internal server error' });
        }
    }
    findToUser = async (req:Request,res:Response)=>{
        let token = getToken(req,res)
        let userId = token.id
        let listPostToUser = await this.postService.getPostToUser(userId)
        let totalLikes = []
        for (let item of listPostToUser) {
            const postId = item.id
            console.log(postId,"postID")
            const likes = await this.likeService.getLikeToPost(postId)
            totalLikes.push(likes)
        }
        console.log('totalLike',totalLikes)
        res.status(200).json(listPostToUser)
    }
    addPostToUser = async (req: Request, res: Response) => {
        let token = getToken(req,res)
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
            const postId = req.params.id
            console.log(userId,'userId')
            console.log(postId,'postId')
            const like = await this.likeService.findUserIdandPostId(userId,postId)

            // Toggle the isLiked status
            like.isLiked =  (like.isLiked === 0) ? 1 : 0;
            console.log( like.isLiked,"like")
            await this.likeService.save(like);

            res.status(200).json({
                message: 'Update like successfully',
                data: { isLiked: like.isLiked },
            });
        } catch (err) {
            console.error(err);
            res.status(400).json({
                message: 'Internal server error',
            });
        }
    };
    deletePostToUser = async (req:Request, res:Response)=>{
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



}

export default new PostController()