"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const friendController_1 = __importDefault(require("../controllers/friendController"));
let friendRouter = express_1.default.Router();
friendRouter.get('/', friendController_1.default.getAll);
friendRouter.post('/', friendController_1.default.create);
exports.default = friendRouter;
//# sourceMappingURL=friendRouter.js.map