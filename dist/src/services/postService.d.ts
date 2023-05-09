declare class PostService {
    private postRepository;
    constructor();
    getPost(user: any, isHasFriend: any): Promise<any>;
    getAllPost: () => Promise<any>;
    getAllPost: (UserId: any) => Promise<any>;
    getPostToUser: (UserId: any) => Promise<any>;
    addPost: (post: any) => Promise<void>;
    updatePost: (id: any, updateNow: any) => Promise<void>;
    removePost: (id: any) => Promise<void>;
}
declare const _default: PostService;
export default _default;
