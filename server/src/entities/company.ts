import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {advertisement} from "./advertisement";
@Entity()
export class company extends  BaseEntity{

  @PrimaryGeneratedColumn()
  com_id!:number;

  @Column()
  com_name!:string;

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

  @OneToMany(type => advertisement, advertisement => advertisement.company)
  advertisements: advertisement[] | undefined;
}