declare class likeService {
    private likePostRepository;
    constructor();
    getAll(post: any): Promise<any>;
    likeOrNot(user: any, post: any): Promise<any>;
    createLike(user: any, post: any): Promise<void>;
    remove(user: any, post: any): Promise<void>;
}
declare const _default: likeService;
export default _default;
