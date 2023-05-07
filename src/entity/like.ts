import {OneToOne, Column,JoinTable,JoinColumn, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Post } from "./post";
import { User } from "./user";
@Entity()
export class Likepost{
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(()=>Post,(post)=> post.likes)
    post:Post; 

    @ManyToOne(()=>User,(user)=> user.likes)
    user: User;
}