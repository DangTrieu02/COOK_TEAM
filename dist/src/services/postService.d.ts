declare class PostService {
    private postRepository;
    constructor();
    getAllPost: () => Promise<any>;
    addPost: (post: any) => Promise<void>;
    updatePost: (id: any, updateNow: any) => Promise<void>;
    removePost: (id: any) => Promise<void>;
}
declare const _default: PostService;
export default _default;
