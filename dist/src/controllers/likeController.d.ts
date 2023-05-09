import { Request, Response } from "express";
declare class LikeController {
    constructor();
    getAll(req: Request, res: Response): Promise<void>;
    createLike(req: Request, res: Response): Promise<void>;
    getLikeByUser(req: Request, res: Response): Promise<void>;
    removeLike(req: Request, res: Response): Promise<void>;
}
declare const _default: LikeController;
export default _default;
