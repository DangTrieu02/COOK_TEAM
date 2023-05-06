declare class CommentService {
    private commentRepository;
    constructor();
    getAll(): Promise<any>;
    create(comment: any): Promise<void>;
    getCommentById(id: any): Promise<any>;
    update(id: any, newContent: any): Promise<void>;
    remove(id: any): Promise<void>;
}
declare const _default: CommentService;
export default _default;
