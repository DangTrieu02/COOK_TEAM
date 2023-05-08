import AppDataSource from "../data-source";
import {Post} from "../entity/post";
import {In} from "typeorm";

class PostService {
    private postRepository;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post)
    }

    getAllPost = async (UserId) => {
        let posts = await this.postRepository.find({
            relations: {
                user: true,
                likes: true,
            }, where: {
                user: {
                    id: In([UserId, 4])
                }
            }
        })
        return posts
    }

    getPostToUser = async (UserId) => {
        let post = await this.postRepository.find({
            relations: {
                user: true
            }, where: {
                user: {
                    id: UserId
                }
            }
        })
        return post
    }

    addPost = async (post) => {

        await this.postRepository.save(post)
    }

    updatePost = async (id, updateNow) => {
        await this.postRepository.update({id: id}, updateNow)
    }
    removePost = async (id) => {
        await this.postRepository.delete({id: id})
    }
}

export default new PostService()