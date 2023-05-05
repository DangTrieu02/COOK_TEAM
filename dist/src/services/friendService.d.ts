declare class FriendService {
    private friendRepository;
    constructor();
    getAll(): Promise<any>;
    create(user: any, friend: any): Promise<void>;
}
declare const _default: FriendService;
export default _default;
