import AppDataSource from "../data-source";
import { Comment } from "../entity/comment";

class CommentService{
    private commentRepository 
    constructor() {
        this.commentRepository= AppDataSource.getRepository(Comment)
    }
    async getAll(){
        return await this.commentRepository.find()
    }
    async create(comment){
        await this.commentRepository.save(comment)
    }
    async getCommentById(id){
        return await this.commentRepository.find({
            relations:{
                user:true
            },
            where:{post:{id:id}}
        })
    }
    async update(id,newContent){
        await this.commentRepository.update(id,{content:newContent})
    }
    async remove(id){
        await this.commentRepository.delete({id:id})
    }
}
export default new CommentService();