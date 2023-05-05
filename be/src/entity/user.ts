
import {BaseEntity, Column, Entity,OneToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { Post } from "./post"; 

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

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[]
}