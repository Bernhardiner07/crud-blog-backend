import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum UserRole {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  USER = 'USER'
}

@Entity()
export class User extends BaseEntity {
  @Column()
  username: String;

  @Column()
  password: String;
  
  @Column()
  firstName: String;

  @Column()
  lastName: String;

  @Column()
  age: number;

  @Column()
  gender: String;

  @Column({type: 'enum', enum:UserRole, default: UserRole.USER})
  role: UserRole;
}