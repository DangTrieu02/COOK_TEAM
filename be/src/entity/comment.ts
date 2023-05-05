import {OneToOne, Column,JoinTable,JoinColumn, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./user";
import { Post } from "./post";
@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({type:"varchar"})
    content:string;
    
    @ManyToOne(() => Post, (post) => post.comments)
    post: Post
}