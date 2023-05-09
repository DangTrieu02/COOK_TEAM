import likeService from "../services/likeService";
import { Request,Response } from "express";
import { getToken } from "./base";

class LikeController{
    constructor(){

    }
    async getAll(req:Request, res:Response){
        let all= await likeService.getAll(+req.query.id);
        console.log(all)
        res.status(200).json(all)
    }
    async createLike(req:Request, res:Response){
        let user = await getToken(req,res)
            await likeService.createLike(user.id,+req.query.id)
            res.status(200).json({message:" đã like"})
        
    }
    async getLikeByUser(req: Request, res: Response){
        let token = getToken(req,res)
        let a= await likeService.getLikesByUserId(token.id)
        res.status(200).json(a)
    }

    async removeLike(req: Request, res: Response){
        let token = getToken(req,res)
        let a= await likeService.remove(token.id,req.query.id)
        res.status(200).json(11)
    }
}

export default new LikeController();