import { User } from "./user";
import { Comment } from "./comment";
import { Likepost } from "./likepost";
export declare class Post {
    id: number;
    postContent: string;
    postImage: string;
    time: Date;
    user: User;
    comments: Comment[];
    likes: Likepost[];
}
