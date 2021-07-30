import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class company extends  BaseEntity{

  @PrimaryGeneratedColumn()
  com_id!:number;

  @Column()
  name!:string;

  @Column()
  email!:string;

  @Column()
  password!:string;

  @Column()
  con_no!:string;

  @Column()
  description!:string;

  @Column()
  image!:string;
}