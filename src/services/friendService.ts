import { User } from '../entity/user';
import AppDataSource from "../data-source";
import { Friend } from '../entity/friend';

class FriendService{
    private friendRepository;
    constructor(){
        this.friendRepository = AppDataSource.getRepository(Friend);
    }
    async getAll(){
        return (await this.friendRepository.find());
    }
    async create(user, friend){
        await this.friendRepository.save({user: user, friend: friend})
    }
}
export default new FriendService();