import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { cvupload } from "./cvupload";

@Entity()
export class student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  image!: string;

  @Column()
  password!: string;

  @Column()
  reg_no!: string;

  @Column()
  f_name!: string;

  @Column()
  l_name!: string;

  @Column()
  email!: string;

  @Column()
  batch_no!: string;

  @Column()
  about!: string;

  @Column()
  cover_pic!: string;

  @Column()
  ContactNumber!: string;

  @Column()
  linkedin!: string;

  @Column()
  address!: string;

  @Column()
  state!: string;

  @Column()
  projectDis1!:string;

  @Column()
  project1!:string;

  @Column()
  projectDis2!:string;

  @Column()
  project2!:string;

  @Column()
  projectDis3!:string;

  @Column()
  project3!:string;

  @Column()
  skills!:string;


  @Column()
  available!:string;


  @OneToMany(type => cvupload, cvupload => cvupload.student)
  cvupload: cvupload[] | undefined;

  @Column()
  accept!:string;

  @Column()
  date!: Date;
}