import {BaseEntity, Column, Entity,OneToMany ,ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user";
import { Comment } from "./comment";
@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:true})
    postContent:string;

    @Column({type:"text",nullable:true})
    postImage:string;

    @Column({type:"datetime",default:new Date})
    time:Date;

    @ManyToOne(() => User, (user) => user.posts)
    user: User

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[]
}