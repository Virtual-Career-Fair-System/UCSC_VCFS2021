import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class send_email extends  BaseEntity{

  @PrimaryGeneratedColumn()
  email_id!:number;

  @Column()
  com_id!:number;

  @Column()
  company_name!:string;

  @Column()
  stu_email!:string;

  @Column()
  stu_id!: number;

  @Column()
  ad_id!: number;

  @Column()
  subject!:string;

  @Column()
  meeting!:string;

  
}