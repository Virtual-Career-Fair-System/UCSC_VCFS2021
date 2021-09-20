import {BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {event} from "./event";
import {company} from "./company";
import {cvupload} from "./cvupload";
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

  @Column()
  category!:string;

  @OneToMany(type => cvupload, cvupload => cvupload.advertisement)
  cvupload: cvupload[] | undefined;
}