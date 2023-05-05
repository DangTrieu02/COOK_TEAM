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
        let checked = await userService_1.default.checkLogin(req.body);
        res.status(200).json(checked);
    }
    async update(req, res) {
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map