import {BaseEntity, Column, Entity,OneToMany ,ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user";
import { Comment } from "./comment";
import { Like } from "./like";
@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"varchar",nullable:true})
    postContent:string;

    @Column({type:"text",nullable:true})
    postImage:string;

    @Column({
        default: ()=> 'CURRENT_TIMESTAMP',
        name: 'time'
    })
    time:Date;

    @ManyToOne(() => User, (user) => user.posts)
    user: User

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[]

    @OneToMany(() => Like, (like) => like.post)
    likes: Like[]
}