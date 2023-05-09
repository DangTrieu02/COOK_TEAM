import userService from '../services/userService';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getToken } from './base';
 

class UserController {
    constructor(){}
    async getAll(req:Request, res:Response){         
        let users = await userService.getAll()
        res.status(200).json(users);
    }

    async register(req:Request, res:Response){
        req.body.background= "https://th.bing.com/th/id/OIP.tHUVPd81OApZWNkn1gZQ_AHaEK?w=266&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
            if (req.body.gender ==="Nam" || req.body.gender ==="Khác" ){
                     req.body.avatar = "https://th.bing.com/th?q=Default+Avatar+Funny&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247"
                }else{
                    req.body.avatar ="https://th.bing.com/th/id/OIP.2mhTDYTGqFxMIkCAyTExFgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                    }
        await userService.register(req.body)
        res.status(200).json('tao oke')
    }

    async login(req:Request, res:Response){
        // console.log(req.headers)
        let checked= await userService.checkLogin(req.body)
        res.status(200).json(checked)
    }

    async updateName(req:Request, res:Response){
        let id = req.query.id
        await userService.updateName(id, req.body.name)
        res.status(200).json({message:"cập nhật hoàn tất "})
    }

    async updateAvatar(req:Request, res:Response){
        let id = req.query.id
        await userService.updateAvatar(id, req.body.name)
        res.status(200).json({message:"cập nhật hoàn tất "})
    }
    async getUser(req:Request, res:Response){
        let id = await getToken(req,res)
        let user= await userService.getById(id.id)
        res.status(200).json(user)
    }
    
    async updateBackground(req:Request, res:Response){
        let id = req.query.id
        await userService.updateBackground(id, req.body.name)
        res.status(200).json({message:"cập nhật hoàn tất "})
    }
    async findOne(req:Request, res:Response){
        let user= await userService.getById(req.query.id)
        res.status(200).json(user)
    }
    
}
export default new UserController();
