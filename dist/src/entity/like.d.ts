import { Post } from "./post";
import { User } from "./user";
export declare class Like {
    id: number;
    isLiked: number;
    post: Post;
    user: User;
}
