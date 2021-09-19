import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class cvupload extends  BaseEntity{

  @PrimaryGeneratedColumn()
  cv_id!:number;


  @Column()
  cv_path1!:string;

  
  
}