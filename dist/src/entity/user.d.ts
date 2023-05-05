import { Post } from "./post";
export declare class User {
    id: number;
    email: string;
    password: string;
    name: string;
    avatar: string;
    background: string;
    gender: string;
    birthday: Date;
    posts: Post[];
}
