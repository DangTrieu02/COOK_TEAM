import { User } from '../entity/user';
import AppDataSource from "../data-source";
import { Friend } from '../entity/friend';

class FriendService{
    private friendRepository; userRepository;
    constructor(){
        this.friendRepository = AppDataSource.getRepository(Friend);
        this.userRepository = AppDataSource.getRepository(User);
    }
    async getAll(){
        return (await this.friendRepository.find({
            relations: {
                user: true,
                friend:true
            }
        }));
    }
    async getFriends(id) {
        let friend = await this.userRepository.query(`
        SELECT user.*
        FROM user
        JOIN friend ON (friend.friendId = user.id AND friend.userId = ${id} AND friend.status = 'bạn bè')
        OR (friend.userId = user.id AND friend.friendId = ${id} AND friend.status = 'bạn bè')
        WHERE user.id != ${id}`)
        return friend;
    }
    async getFriend(id) {
        const friends = await this.friendRepository.find({
          where: [
            { user: { id }, status: 'bạn bè' },
            { friend: { id }, status: 'bạn bè' }
          ],
          relations: ['user', 'friend']
        });
        return friends;
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
    async isHasFriend(id){
        let result= await this.friendRepository.query(`
        SELECT * FROM friend WHERE (userId = ${id} OR friendId =${id}) AND status = 'bạn bè';`)
        if(result.length!=0){
            return true
        }else{
            return false;
        }
    }
}
export default new FriendService();