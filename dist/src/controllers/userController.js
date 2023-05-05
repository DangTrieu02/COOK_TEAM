"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
class UserController {
    constructor() { }
    async getAll(req, res) {
        let users = await userService_1.default.getAll();
        res.status(200).json(users);
    }
    async register(req, res) {
        await userService_1.default.register(req.body);
        res.status(200).json('tao oke');
    }
    async login(req, res) {
        console.log(req.headers);
        let checked = await userService_1.default.checkLogin(req.body);
        res.status(200).json(checked);
    }
    async updateName(req, res) {
        let id = req.query.id;
        await userService_1.default.updateName(id, req.body);
    }
    async updateAvatar(req, res) {
        let id = req.query.id;
        await userService_1.default.updateAvatar(id, req.body);
    }
    async updateBackground(req, res) {
        let id = req.query.id;
        await userService_1.default.updateBackground(id, req.body);
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map