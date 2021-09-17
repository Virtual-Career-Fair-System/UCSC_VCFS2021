import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class cvupload extends  BaseEntity{

  @PrimaryGeneratedColumn()
  cv_id!:number;


  @Column()
  s_name!:string;

  @Column()
  s_email!:string;

  @Column()
  cv_path1!:string;

  
  
}