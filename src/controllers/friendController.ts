import  jwt  from 'jsonwebtoken';
import { Request, Response } from 'express';
import friendService from '../services/friendService';
import { SECRET_KEY } from '../middlewares/auth';
import { getToken } from './base';



class FriendController{
    constructor(){}
    async getAll(req:Request, res:Response){
        let all= await friendService.getAll();
        res.status(200).json(all);
    }
    async getFriendById(req:Request, res:Response){
        let token = await getToken(req, res);
        let friendList= await friendService.getFriend(1)
        res.status(200).json(friendList);
    }
    async create(req:Request, res:Response){
        let token = getToken(req,res)
        await friendService.create(token.id,req.query.id)
        res.status(200).json({message:"thêm thành công !"})
    }
    async confirm(req:Request, res:Response){
        await friendService.confirm(req.query.id)
        res.status(200).json({message:"đã xác nhận !"})

    }
    async waitList(req:Request, res:Response){
        let token = getToken(req,res)
        res.status(200).json(await friendService.waitList(token))
    }
    async remove(req:Request, res:Response){
        await friendService.remove(req.query.id)
        res.status(200).json({message:"xóa thành công !"})
    }
}

export default new FriendController();
