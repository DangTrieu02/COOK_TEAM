"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const friendService_1 = __importDefault(require("../services/friendService"));
const base_1 = require("./base");
class FriendController {
    constructor() { }
    async getAll(req, res) {
        let all = await friendService_1.default.getAll();
        res.status(200).json(all);
    }
    async getFriendById(req, res) {
        let token = await (0, base_1.getToken)(req, res);
        let friendList = await friendService_1.default.getFriend(1);
        res.status(200).json(friendList);
    }
    async create(req, res) {
        let token = (0, base_1.getToken)(req, res);
        await friendService_1.default.create(token.id, req.query.id);
        res.status(200).json({ message: "thêm thành công !" });
    }
    async confirm(req, res) {
        await friendService_1.default.confirm(req.query.id);
        res.status(200).json({ message: "đã xác nhận !" });
    }
    async waitList(req, res) {
        let token = (0, base_1.getToken)(req, res);
        res.status(200).json(await friendService_1.default.waitList(token));
    }
    async remove(req, res) {
        await friendService_1.default.remove(req.query.id);
        res.status(200).json({ message: "xóa thành công !" });
    }
}
exports.default = new FriendController();
//# sourceMappingURL=friendController.js.map