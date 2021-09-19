import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class adpublish extends  BaseEntity{

  @PrimaryGeneratedColumn()
  ad_id!:number;

  @Column()
  eventId!: number;

  @Column()
  loginId!: number;


  @Column()
  ad_description!:string;

  @Column()
  ad_path1!:string;

  
  
}