"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commentService_1 = __importDefault(require("../services/commentService"));
const base_1 = require("./base");
class CommentController {
    constructor() { }
    async getAll(req, res) {
        let allComment = await commentService_1.default.getAll();
        res.status(200).json(allComment);
    }
    async create(req, res) {
        req.body.post = req.query.id;
        req.body.user = await (0, base_1.getToken)(req, res);
        await commentService_1.default.create(req.body);
        res.status(200).json({ message: "bình luận thành công " });
    }
    async getComment(req, res) {
        let comment = await commentService_1.default.getCommentById(req.query.id);
        res.status(200).json(comment);
    }
    async updateComment(req, res) {
        await commentService_1.default.update(req.query.id, req.body.content);
        res.status(200).json({ message: "cập nhật comment thành công !" });
    }
    async remove(req, res) {
        await commentService_1.default.remove(req.query.id);
        res.status(200).json({ message: "xóa comment thành công !" });
    }
}
exports.default = new CommentController();
//# sourceMappingURL=commentController.js.map