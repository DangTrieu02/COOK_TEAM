import { Post } from "./post";
import { Likepost } from "./like";
import { Comment } from './comment';
export declare class User {
    id: number;
    email: string;
    password: string;
    name: string;
    avatar: string;
    background: string;
    gender: string;
    birthday: Date;
    likes: Likepost;
    comments: Comment;
    posts: Post;
}
