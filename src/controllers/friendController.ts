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
    async create(req:Request, res:Response){
        let token = getToken(req,res)
        await friendService.create(token.id,req.query.id)
    }
}

export default new FriendController();
