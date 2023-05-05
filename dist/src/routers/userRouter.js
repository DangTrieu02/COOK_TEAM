"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = __importDefault(require("../controllers/userController"));
const auth_1 = require("../middlewares/auth");
let userRouter = express_1.default.Router();
userRouter.get('/', auth_1.auth, userController_1.default.getAll);
userRouter.post('/', auth_1.checkRegister, userController_1.default.register);
userRouter.post('/login', userController_1.default.login);
userRouter.patch('/name', userController_1.default.updateName);
userRouter.patch('/avatar', userController_1.default.updateAvatar);
userRouter.patch('/background', userController_1.default.updateBackground);
exports.default = userRouter;
//# sourceMappingURL=userRouter.js.map