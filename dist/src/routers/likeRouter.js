"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middlewares/auth");
const postController_1 = __importDefault(require("../controllers/postController"));
const likeController_1 = __importDefault(require("../controllers/likeController"));
const likeRouter = (0, express_1.Router)();
likeRouter.get('/', likeController_1.default.getAll);
likeRouter.post('/', likeController_1.default.createLike);
likeRouter.use(auth_1.auth);
likeRouter.put('/:id', postController_1.default.updateLike);
exports.default = likeRouter;
//# sourceMappingURL=likeRouter.js.map