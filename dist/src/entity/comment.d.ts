import { User } from "./user";
import { Post } from "./post";
export declare class Comment {
    id: number;
    content: string;
    post: Post;
    user: User;
}
