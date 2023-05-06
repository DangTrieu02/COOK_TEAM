"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentController_1 = __importDefault(require("../controllers/commentController"));
let commentRouter = express_1.default.Router();
commentRouter.get('/', commentController_1.default.getAll);
commentRouter.post('/', commentController_1.default.create);
commentRouter.get('/post', commentController_1.default.getComment);
commentRouter.patch('/', commentController_1.default.updateComment);
commentRouter.delete('/', commentController_1.default.remove);
exports.default = commentRouter;
//# sourceMappingURL=commentRouter.js.map