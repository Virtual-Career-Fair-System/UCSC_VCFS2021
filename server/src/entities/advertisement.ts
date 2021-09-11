import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {event} from "./event";
import {company} from "./company";
@Entity()
export class advertisement extends  BaseEntity{

  @PrimaryGeneratedColumn()
  ad_id!:number;

  @ManyToOne(type => event, event => event.id)
  event: event | undefined;

  @ManyToOne(type => company, company => company.com_id)
  company: company | undefined;

  @Column()
  description!:string;

  @Column()
  image!:string;

  @Column()
  status!:string;
}