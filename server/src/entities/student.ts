import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class student extends  BaseEntity{

  @PrimaryGeneratedColumn()
  id!:number;

  @Column()
  image!:string;

  @Column()
  password!:string;

  @Column()
  reg_no!:string;

  @Column()
  f_name!:string;

  @Column()
  l_name!:string;

  @Column()
  email!:string;

  @Column()
  batch_no!:string;

  @Column()
  about!:string;
}