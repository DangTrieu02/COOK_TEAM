"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const friendRouter_1 = __importDefault(require("./friendRouter"));
const postRouter_1 = __importDefault(require("./postRouter"));
const commentRouter_1 = __importDefault(require("./commentRouter"));
const likeRouter_1 = __importDefault(require("./likeRouter"));
const router = (0, express_1.Router)();
router.use('/auth', userRouter_1.default);
router.use('/friend', friendRouter_1.default);
router.use('/post', postRouter_1.default);
router.use('/like', likeRouter_1.default);
router.use('/comment', commentRouter_1.default);
router.use('/like', likeRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map