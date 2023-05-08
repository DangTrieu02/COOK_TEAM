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
            JOIN user u ON p.id = u.id
            JOIN friend f ON p.id = f.id  OR p.userId = f.friendId and f.status='bạn bè'
            WHERE u.id = ${user} OR (f.userId = ${user} OR f.friendId = ${user})
            ORDER BY p.time DESC;
            `)
        }else{
            return await this.postRepository.query(`
            select post.* , user.name, user.avatar from post
            join user on post.userId = user.id
            where post.userId = ${user}`)
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

    updatePost = async (id,updateNow)=>{
        await this.postRepository.update({id:id},updateNow )
    }
    removePost= async (id)=>{
        await this.postRepository.delete({id:id})
    }
}

export default new PostService()