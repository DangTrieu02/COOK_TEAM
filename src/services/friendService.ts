import { User } from '../entity/user';
import AppDataSource from "../data-source";
import { Friend } from '../entity/friend';

class FriendService{
    private friendRepository;
    constructor(){
        this.friendRepository = AppDataSource.getRepository(Friend);
    }
    async getAll(){
        return (await this.friendRepository.find({
            relations: {
                user: true,
                friend:true
            }
        }));
    }

    async waitList(friend){
        return (await this.friendRepository.find({
            relations: {
                user: true,
                friend:true
            },
            where:{friend:{id:friend.id},status:"not"}
        }))
    }

    async create(user, friend){
        await this.friendRepository.save({user: user, friend: friend})
    }
    async confirm(id){
        await this.friendRepository.update(id,{status:'bạn bè'})
    }
    async remove(id){
        await this.friendRepository.delete({id})
    }
}
export default new FriendService();