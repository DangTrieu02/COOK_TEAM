import userService from '../services/userService';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
 

class UserController {
    constructor(){}
    async getAll(req:Request, res:Response){         
        let users = await userService.getAll()
        res.status(200).json(users);
    }

    async register(req:Request, res:Response){
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
    }

    async updateAvatar(req:Request, res:Response){
        let id = req.query.id
        await userService.updateAvatar(id, req.body.name)
    }
    
    async updateBackground(req:Request, res:Response){
        let id = req.query.id
        await userService.updateBackground(id, req.body.name)
    }

    
}
export default new UserController();
