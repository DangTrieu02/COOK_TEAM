import {BaseEntity, Column, Entity,OneToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Post } from "./post"; 
import { Likepost } from "./like";
import { Comment } from './comment';
import { Friend } from "./friend";
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar"})
    email:string;

    @Column({type:"varchar"})
    password:string;

    @Column({type:"varchar"})
    name:string;

    @Column({type:"text", nullable: true})
    avatar:string;

    @Column({type:"text", nullable: true})
    background:string;

    @Column({type:"varchar", nullable: true})
    gender:string;

    @Column({type:Date, nullable: true})
    birthday:Date

    @OneToMany(()=> Likepost ,(likepost)=> likepost.user)
    likes: Likepost

    @OneToMany(()=> Comment ,(comment)=> comment.user)
    comments: Comment

    @OneToMany(() => Post, (post) => post.user)
    posts: Post

}