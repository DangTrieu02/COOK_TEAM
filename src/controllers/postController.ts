import postService from "../services/postService";
import {Request, Response} from "express";

export class PostController {
    private postService;

    constructor() {
        this.postService = postService
    }

    findAll = async (req: Request, res: Response) => {
        let listPost = await this.postService.getAllPost()
        res.status(200).json(listPost)
    }
    addPostToUser = async (req: Request, res: Response) => {

        let post = req.body
        console.log("post:", post)
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