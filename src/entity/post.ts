import {BaseEntity, Column, Entity,OneToMany ,ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn} from "typeorm";
import { User } from "./user";
import { Comment } from "./comment";
import { Likepost } from "./likepost";
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

    @OneToMany(() => Likepost, (likepost) => likepost.post)
    @JoinColumn({name: "likes", referencedColumnName: "postId"})
    likes: Likepost[]
}