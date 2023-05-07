declare class LikeService {
    private likeRepository;
    constructor();
    getLikeToPost: (postId: any) => Promise<any>;
    findUserIdandPostId: (userId: any, postId: any) => Promise<any>;
}
declare const _default: LikeService;
export default _default;
