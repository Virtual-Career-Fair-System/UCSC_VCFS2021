import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class event extends  BaseEntity{

  @PrimaryGeneratedColumn()
  id!:number;

  @Column()
  event_code!:string;

  @Column()
  name!:string;

  @Column()
  cover_image!:string;


  @Column('text')
  description!:string;

  @Column('text')
  rules!:string;

  @Column()
  organizer!:number;

  @Column('date')
  start_date!:string;

  @Column('date')
  end_date!:string;

  @Column()
  status!:string;
}