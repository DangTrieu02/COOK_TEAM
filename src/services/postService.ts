import AppDataSource from "../data-source";
import {Post} from "../entity/post";

class PostService {
    private postRepository;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post)
    }
    
    async getPost(user,isHasFriend){
        if(isHasFriend){
            return await this.postRepository.query(`
            SELECT DISTINCT p.*, u.name , u.avatar
            FROM post p
            JOIN user u ON p.userId = u.id
            JOIN friend f ON p.userId = f.friendId  OR p.userId = f.userId and f.status='bạn bè'
            WHERE u.id = ${user} OR (f.userId = ${user} OR f.friendId = ${user})
            ORDER BY p.time DESC;
            `)
        }else{
            // return await this.postRepository.query(`
            // select post.* , user.name, user.avatar from post
            // join user on post.userId = user.id
            // where post.userId = ${user}`)
            let a = await this.postRepository
        .createQueryBuilder("post")
        .leftJoinAndSelect("post.likes", "likes")
        .leftJoinAndSelect("post.user", "user")
        .where(`post.userId = ${user}`)
        .getMany();
      return a;
        }
    }

    getAllPost = async() =>{
        let post = await this.postRepository.find({
            relations: {
                user:true
            }
        })
        return post
    }

    addPost = async (post)=>{
        await this.postRepository.save(post)
    }

    findOne = async (post)=>{
        return await this.postRepository.find({
            relations:{user:true}
            ,where:{id:post}})
    }

    updatePost = async (id,updateNow)=>{
        await this.postRepository.update({id:id},updateNow )
    }
    removePost= async (id)=>{
        await this.postRepository.delete({id:id})
    }
}

export default new PostService()