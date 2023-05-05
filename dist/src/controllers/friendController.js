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
    async create(req, res) {
        let token = (0, base_1.getToken)(req, res);
        await friendService_1.default.create(token.id, req.query.id);
    }
}
exports.default = new FriendController();
//# sourceMappingURL=friendController.js.map