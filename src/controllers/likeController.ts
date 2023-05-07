import likeService from "../services/likeService";
import { Request,Response } from "express";
import { getToken } from "./base";

class LikeController{
    constructor(){}
    async getAll(req:Request, res:Response){
        let all= await likeService.getAll(+req.query.id);
        console.log(all)
        res.status(200).json(all)
    }
    async createLike(req:Request, res:Response){
        let user = await getToken(req,res)
        let isLike = await likeService.likeOrNot(user.id , +req.query.id)
        if (isLike.length!=0){
            await likeService.remove(user.id,+req.query.id)
            res.status(200).json({message:"không like nữa"})
        }else{
            await likeService.createLike(user.id,+req.query.id)
            res.status(200).json({message:" đã like"})
        }
    }
}

export default new LikeController();