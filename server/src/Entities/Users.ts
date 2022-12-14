import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity{
   
   @PrimaryGeneratedColumn()
   id!:number;
   
   @Column()
   username!:string;

   @Column()
   email!:string;

   @Column()
   password!:string;

   @Column()
   confirmPassword!:string;

   @Column()
   createdAt!:string;

   @Column()
   token!:string;

}