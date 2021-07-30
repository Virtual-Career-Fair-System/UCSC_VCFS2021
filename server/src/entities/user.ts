import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class user extends  BaseEntity{

  @PrimaryGeneratedColumn()
  id!:number;

  @Column()
  type!:string;

  @Column()
  email!:string;
}