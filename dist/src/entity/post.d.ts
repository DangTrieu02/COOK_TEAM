import { User } from "./user";
import { Comment } from "./comment";
export declare class Post {
    id: number;
    postContent: string;
    postImage: string;
    time: Date;
    user: User;
    comments: Comment[];
}
