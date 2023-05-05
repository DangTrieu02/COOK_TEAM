import jwt from 'jsonwebtoken';
import userService from '../services/userService';
export let SECRET_KEY="hihihaha"

export async function checkUser(req,res,next){
   let checkUser = await userService.find(req.body.email)
   if(checkUser.length>0){
        let authorization = req.headers.authorization;
        
        
   }else{
    res.status(401).json('tai khoan khong ton tai')
   }
}

export async function checkRegister(req, res, next){
    let checkName = await userService.find(req.body.email)
    if(checkName.length!=0){
        res.status(201).json('tai khoan da ton tai !')
    }else{
        return next()
    }
}