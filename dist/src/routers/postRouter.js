"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const postController_1 = __importDefault(require("../controllers/postController"));
const auth_1 = require("../middlewares/auth");
const postRouter = (0, express_1.Router)();
postRouter.use(auth_1.auth);
postRouter.get('/', postController_1.default.findAll);
postRouter.get('/:id', postController_1.default.findToUser);
postRouter.post('/', postController_1.default.addPostToUser);
postRouter.put('/:id', postController_1.default.updatePostToUser);
postRouter.delete('/:id', postController_1.default.deletePostToUser);
exports.default = postRouter;
//# sourceMappingURL=postRouter.js.map