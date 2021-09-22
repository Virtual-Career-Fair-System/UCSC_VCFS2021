import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {advertisement} from "./advertisement";
import {student} from "./student";
@Entity()
export class cvupload extends  BaseEntity{

  @PrimaryGeneratedColumn()
  cv_id!:number;

  @Column()
  cv_path1!:string;

  @ManyToOne(type => advertisement, advertisement => advertisement.ad_id)
  advertisement: advertisement | undefined;

  @ManyToOne(type => student, student => student.id)
  student: student | undefined;

  @Column()
  status!:string;
}