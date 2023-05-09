declare class FriendService {
    private friendRepository;
    userRepository: any;
    constructor();
    getAll(): Promise<any>;
    getFriends(id: any): Promise<any>;
    getFriend(id: any): Promise<any>;
    waitList(friend: any): Promise<any>;
    create(user: any, friend: any): Promise<void>;
    confirm(id: any): Promise<void>;
    remove(id: any): Promise<void>;
    isHasFriend(id: any): Promise<boolean>;
}
declare const _default: FriendService;
export default _default;
