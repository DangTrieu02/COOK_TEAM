"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middlewares/auth");
function getToken(req, res) {
    let auth = req.headers.authorization;
    let token = auth.split(' ')[1];
    let userSub = jsonwebtoken_1.default.verify(token, auth_1.SECRET_KEY);
    return userSub;
}
exports.getToken = getToken;
//# sourceMappingURL=base.js.map