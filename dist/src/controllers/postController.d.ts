import { Request, Response } from "express";
export declare class PostController {
    private postService;
    private likeService;
    constructor();
    javascript: any;
    findAll: (req: Request, res: Response) => Promise<void>;
    findToUser: (req: Request, res: Response) => Promise<void>;
    addPostToUser: (req: Request, res: Response) => Promise<void>;
    updatePostToUser: (req: Request, res: Response) => Promise<void>;
    updateLike: (req: Request, res: Response) => Promise<void>;
    deletePostToUser: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostController;
export default _default;
