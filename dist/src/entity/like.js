"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Likepost = void 0;
const typeorm_1 = require("typeorm");
const post_1 = require("./post");
const user_1 = require("./user");
let Likepost = class Likepost {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Likepost.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "tinyint",
        default: 0
    }),
    __metadata("design:type", Number)
], Likepost.prototype, "isLiked", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => post_1.Post, (post) => post.likes),
    __metadata("design:type", post_1.Post)
], Likepost.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.likes),
    __metadata("design:type", user_1.User)
], Likepost.prototype, "user", void 0);
Likepost = __decorate([
    (0, typeorm_1.Entity)()
], Likepost);
exports.Likepost = Likepost;
//# sourceMappingURL=like.js.map