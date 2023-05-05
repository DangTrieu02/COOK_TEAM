import { User } from '../entity/user';
import AppDataSource from "../data-source";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { SECRET_KEY } from '../middlewares/auth';

class UserService {
    private userRepository 
    constructor(){
        this.userRepository= AppDataSource.getRepository(User)
    }
    async getAll(){
        return(await this.userRepository.find());
    }
    async getById(id){
         return( await this.userRepository.find({
            where:{id:id}
        })
    )}
    async register(user){
        user.password = await bcrypt.hash(user.password,4)
        await this.userRepository.save(user)
    }
    async find(email){
        return (await this.userRepository.find( {where:{email:email}}))
    }
    async checkLogin(user){
        let userFind= await this.userRepository.find({where:{email:user.email}}) 
        if(userFind.length!=0){
            let comparePassword= await bcrypt.compare(user.password,userFind[0].password) 
            if(comparePassword){
                let payload={
                    name:userFind[0].name,
                    id:userFind[0].id
                }
                return jwt.sign(payload, SECRET_KEY, {
                    expiresIn: 36000 * 1000
                });       
            }else{
                return  {message:"mat khau sai"}
            }
        }else{
            return {message:"tai khoan khong ton tai"}
        }
    }
    async updateName(id,name){
        await this.userRepository.update(id,{name:name})
    }
    async updateAvatar(id,avatar){
        await this.userRepository.update(id,{avatar:avatar})
    }
    async updateBackground(id,background){
        await this.userRepository.update(id,{background:background})
    }
    
}
export default new UserService();