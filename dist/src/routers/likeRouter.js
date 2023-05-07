"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const likeController_1 = __importDefault(require("../controllers/likeController"));
const express_1 = require("express");
const likeRouter = (0, express_1.Router)();
likeRouter.get('/', likeController_1.default.getAll);
likeRouter.post('/', likeController_1.default.createLike);
exports.default = likeRouter;
//# sourceMappingURL=likeRouter.js.map