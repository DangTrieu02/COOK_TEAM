"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.checkRegister = exports.SECRET_KEY = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userService_1 = __importDefault(require("../services/userService"));
exports.SECRET_KEY = "hihihaha";
async function checkRegister(req, res, next) {
    let checkName = await userService_1.default.find(req.body.email);
    console.log(checkName, 11111);
    if (checkName.length != 0) {
        return res.status(201).json("tai khoan da ton tai !");
    }
    else {
        return next();
    }
}
exports.checkRegister = checkRegister;
const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(" ")[1];
        if (accessToken) {
            jsonwebtoken_1.default.verify(accessToken, exports.SECRET_KEY, (err, payload) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: "Bạn k có quyền",
                    });
                }
                else {
                    req.decode = payload;
                    return next();
                }
            });
        }
        else {
            res.status(401).json({
                message: "Bạn k có quyền",
            });
        }
    }
    else {
        res.status(401).json({
            message: "Bạn k có quyền",
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map