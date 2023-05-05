import AppDataSource from "../data-source";
import {Post} from "../entity/post";

class PostService {
    private postRepository;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post)
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