import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class event extends  BaseEntity{

  @PrimaryGeneratedColumn()
  id!:number;

  @Column()
  type!:string;

  @Column()
  email!:string;
}