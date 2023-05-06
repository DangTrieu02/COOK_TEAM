"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = __importDefault(require("../data-source"));
const comment_1 = require("../entity/comment");
class CommentService {
    constructor() {
        this.commentRepository = data_source_1.default.getRepository(comment_1.Comment);
    }
    async getAll() {
        return await this.commentRepository.find();
    }
    async create(comment) {
        await this.commentRepository.save(comment);
    }
    async getCommentById(id) {
        return await this.commentRepository.find({
            relations: {
                user: true
            },
            where: { post: { id: id } }
        });
    }
    async update(id, newContent) {
        await this.commentRepository.update(id, { content: newContent });
    }
    async remove(id) {
        await this.commentRepository.delete({ id: id });
    }
}
exports.default = new CommentService();
//# sourceMappingURL=commentService.js.map