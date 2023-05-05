import {OneToOne, Column,JoinTable,JoinColumn, Entity, PrimaryGeneratedColumn} from "typeorm";
import { User } from "./user";
@Entity()
export class Friend{
    @PrimaryGeneratedColumn()
    id:number;
    
    @OneToOne(() => User)
    @JoinColumn()
    user: User

    @OneToOne(()=>User)
    @JoinColumn()
    friend: User

    @Column({type: "varchar",default:"not"})
    status:string;
}