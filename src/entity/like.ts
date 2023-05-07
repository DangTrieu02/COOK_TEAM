import {OneToOne, Column,JoinTable,JoinColumn, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Post } from "./post";
import { User } from "./user";
@Entity()
export class Like{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "tinyint",
        default: 0 // giá trị mặc định là 0
    })
    isLiked: number;
    
    @ManyToOne(()=>Post,(post)=> post.likes)
    post:Post; 

    @ManyToOne(()=>User,(user)=> user.likes)
    user: User;
}