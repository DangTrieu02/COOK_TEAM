import { Request, Response } from 'express';
declare class UserController {
    constructor();
    getAll(req: Request, res: Response): Promise<void>;
    register(req: Request, res: Response): Promise<void>;
    login(req: Request, res: Response): Promise<void>;
    updateName(req: Request, res: Response): Promise<void>;
    updateAvatar(req: Request, res: Response): Promise<void>;
    updateBackground(req: Request, res: Response): Promise<void>;
    findOne(req: Request, res: Response): Promise<void>;
}
declare const _default: UserController;
export default _default;
