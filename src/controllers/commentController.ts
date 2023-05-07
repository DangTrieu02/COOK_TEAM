import { Request, Response } from 'express';
import CommentService from '../services/commentService';
import { getToken } from './base';

class CommentController{
    constructor(){}

    async getAll(req:Request, res: Response){
        let allComment= await CommentService.getAll()
        res.status(200).json(allComment);
    }
    async create(req:Request,res:Response){
        req.body.post= req.query.id
        req.body.user= await getToken(req,res)
        await CommentService.create(req.body)
        res.status(200).json({message:"bình luận thành công "})
    }
    async getComment(req:Request,res:Response){
        let comment= await CommentService.getCommentById(req.query.id);
        res.status(200).json(comment);
    }
    async updateComment(req:Request,res:Response){
        await CommentService.update(req.query.id,req.body.content)
        res.status(200).json({message:"cập nhật comment thành công !"})
    }
    async remove(req:Request,res:Response){
        await CommentService.remove(req.query.id)
        res.status(200).json({message:"xóa comment thành công !"})
    }

}

export default new CommentController();