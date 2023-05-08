"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../services/userService"));
const base_1 = require("./base");
class UserController {
    constructor() { }
    async getAll(req, res) {
        let users = await userService_1.default.getAll();
        res.status(200).json(users);
    }
    async register(req, res) {
        req.body.background = "https://th.bing.com/th/id/OIP.tHUVPd81OApZWNkn1gZQ_AHaEK?w=266&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7";
        if (req.body.gender === "Nam" || req.body.gender === "Khác") {
            req.body.avatar = "https://th.bing.com/th?q=Default+Avatar+Funny&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-WW&cc=VN&setlang=vi&adlt=moderate&t=1&mw=247";
        }
        else {
            req.body.avatar = "https://th.bing.com/th/id/OIP.2mhTDYTGqFxMIkCAyTExFgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
        }
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
        await userService_1.default.updateName(id, req.body.name);
        res.status(200).json({ message: "cập nhật hoàn tất " });
    }
    async updateAvatar(req, res) {
        let id = req.query.id;
        await userService_1.default.updateAvatar(id, req.body.name);
        res.status(200).json({ message: "cập nhật hoàn tất " });
    }
    async getUser(req, res) {
        let id = await (0, base_1.getToken)(req, res);
        let user = await userService_1.default.getById(id.id);
        res.status(200).json(user);
    }
    async updateBackground(req, res) {
        let id = req.query.id;
        await userService_1.default.updateBackground(id, req.body.name);
        res.status(200).json({ message: "cập nhật hoàn tất " });
    }
    async findOne(req, res) {
        let user = await userService_1.default.getById(req.query.id);
        res.status(200).json(user);
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map