import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  sender: string;

  @Column()
  recipient: string;

  @Column()
  messageContent: string;
}
