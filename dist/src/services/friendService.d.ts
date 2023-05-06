declare class FriendService {
    private friendRepository;
    constructor();
    getAll(): Promise<any>;
    waitList(friend: any): Promise<any>;
    create(user: any, friend: any): Promise<void>;
    confirm(id: any): Promise<void>;
    remove(id: any): Promise<void>;
}
declare const _default: FriendService;
export default _default;
