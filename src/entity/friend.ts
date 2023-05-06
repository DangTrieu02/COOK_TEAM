import {OneToOne, Column,JoinTable,JoinColumn, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { User } from "./user";
@Entity()
export class Friend{
    @PrimaryGeneratedColumn()
    id:number;
    
    @ManyToOne(()=>User,(user)=> user.id)
    user: User;

    @ManyToOne(()=>User,(user)=> user.id)
    friend : User;

    @Column({type: "varchar",default:"not"})
    status:string;
}