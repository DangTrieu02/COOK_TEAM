"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const likeService_1 = __importDefault(require("../services/likeService"));
const base_1 = require("./base");
class LikeController {
    constructor() {
    }
    async getAll(req, res) {
        let all = await likeService_1.default.getAll(+req.query.id);
        console.log(all);
        res.status(200).json(all);
    }
    async createLike(req, res) {
        let user = await (0, base_1.getToken)(req, res);
        await likeService_1.default.createLike(user.id, +req.query.id);
        res.status(200).json({ message: " đã like" });
    }
    async getLikeByUser(req, res) {
        let token = (0, base_1.getToken)(req, res);
        let a = await likeService_1.default.getLikesByUserId(token.id);
        res.status(200).json(a);
    }
    async removeLike(req, res) {
        let token = (0, base_1.getToken)(req, res);
        let a = await likeService_1.default.remove(token.id, req.query.id);
        res.status(200).json(11);
    }
}
exports.default = new LikeController();
//# sourceMappingURL=likeController.js.map