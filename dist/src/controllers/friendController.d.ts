import { Request, Response } from 'express';
declare class FriendController {
    constructor();
    getAll(req: Request, res: Response): Promise<void>;
    create(req: Request, res: Response): Promise<void>;
}
declare const _default: FriendController;
export default _default;
