"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = __importDefault(require("../data-source"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const auth_1 = require("../middlewares/auth");
class UserService {
    constructor() {
        this.userRepository = data_source_1.default.getRepository(user_1.User);
    }
    async getAll() {
        return (await this.userRepository.find());
    }
    async getById(id) {
        return (await this.userRepository.find({
            where: { id: id }
        }));
    }
    async register(user) {
        user.password = await bcrypt_1.default.hash(user.password, 4);
        await this.userRepository.save(user);
    }
    async find(email) {
        return (await this.userRepository.find({ where: { email: email } }));
    }
    async checkLogin(user) {
        let userFind = await this.userRepository.find({ where: { email: user.email } });
        if (userFind.length != 0) {
            let comparePassword = await bcrypt_1.default.compare(user.password, userFind[0].password);
            if (comparePassword) {
                let payload = {
                    name: userFind[0].name,
                    id: userFind[0].id
                };
                return jsonwebtoken_1.default.sign(payload, auth_1.SECRET_KEY, {
                    expiresIn: 36000 * 1000
                });
            }
            else {
                return { message: "mat khau sai" };
            }
        }
        else {
            return { message: "tai khoan khong ton tai" };
        }
    }
    async updateName(id, name) {
        await this.userRepository.update(id, { name: name });
    }
    async updateAvatar(id, avatar) {
        await this.userRepository.update(id, { avatar: avatar });
    }
    async updateBackground(id, background) {
        await this.userRepository.update(id, { background: background });
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map