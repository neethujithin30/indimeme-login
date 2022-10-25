import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin extends BaseEntity{
   
   @PrimaryGeneratedColumn()
   id!:number;
   
   @Column()
   admin_username!:string;

   @Column()
   admin_password!:string;


}