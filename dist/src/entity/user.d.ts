import { Post } from "./post";
import { Like } from "./like";
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
    likes: Like[];
    comments: Comment[];
    posts: Post[];
}
