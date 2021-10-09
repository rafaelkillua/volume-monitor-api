import { IsDate, IsNumber } from 'class-validator';
import {
  Entity, ObjectIdColumn, ObjectID, Column, BaseEntity, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity()
export default class Log extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  @IsNumber()
  duration: number;

  @Column()
  @IsNumber()
  distance: number;

  @Column()
  @IsNumber()
  volume: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
