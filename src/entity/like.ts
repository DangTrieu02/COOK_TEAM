import {OneToOne, Column,JoinTable,JoinColumn, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Post } from "./post";
import { User } from "./user";
@Entity()
export class Like{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "int",default:1})
    likeTime:number;
    
    @ManyToOne(()=>Post,(post)=> post.comments)
    post:Post; 

    @ManyToOne(()=>User,(user)=> user.likes)
    user: User;
}