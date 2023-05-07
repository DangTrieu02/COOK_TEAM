import AppDataSource from "../data-source";
import { Likepost } from "../entity/like";

class likeService{
    private likePostRepository 
    constructor(){
        this.likePostRepository = AppDataSource.getRepository(Likepost)
    }
    async getAll(post){
        return await this.likePostRepository.find({
            relations:{
                user:true,
                post:true
            },
            where:{post: { id:post}}
        })
    }
    async likeOrNot(user,post){
        return await this.likePostRepository.find({
            relations:{
                user:true
            },
            where:{
                post: {id:post},
                user: {id: user}
            }
        })
    }
    async createLike(user,post){
        await this.likePostRepository.save({user:user,post:post})
    }
    async remove(user,post){
        const likeToDelete = await this.likePostRepository.findOne({where:{ user: { id: user }, post: { id: post } }});
        await this.likePostRepository.delete(likeToDelete);
    }
    
}
export default new likeService();