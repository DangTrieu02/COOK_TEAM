import AppDataSource from "../data-source";
import { Likepost } from "../entity/like";
import {Like} from "../entity/like";
class likeService{
    private likePostRepository
    private likeRepository;
    constructor(){
        this.likePostRepository = AppDataSource.getRepository(Likepost)
        this.likeRepository = AppDataSource.getRepository(Like)
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
    getLikeToPost = async (postId) => {
        //    let isLike =  await this.likeRepository.find({
        //         relations : {
        //             post:true
        //         }, where:{
        //             userId:userId,
        //             postId:postId,
        //
        //         }
        //     })
        // }
        const sqlQuery = `select count(isLiked) as 'totalLike'
                          from \`like\`
                          where postId = ?
                            and isLiked = 1`;
        const postLike = await this.likeRepository.query(sqlQuery, [postId]);
        return postLike
    }
    findUserIdandPostId =async (userId, postId)=>{
        let postLike = await this.likeRepository.findOneOrFail({
            where: { user: userId, post: postId },
        });
        return postLike[0]
    }
}
export default new likeService();