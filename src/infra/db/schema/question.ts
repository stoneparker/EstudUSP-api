import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user';
import { Subject } from './subject';
import { Professor } from './professor';
import { Tag } from './tag';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  upvote: number;

  @Column()
  anonymous: boolean;

  @Column({ nullable: true })
  username: string;

  @Column('text', { nullable: true, array: true })
  attachments: string[];

  @ManyToOne(() => Subject, (subject) => subject)
  subject: Subject;

  @ManyToOne(() => User, (user) => user)
  user: User;

  @ManyToOne(() => Professor, (professor) => professor)
  professor: Professor;

  @ManyToMany(() => Tag, (tag) => tag)
  @JoinTable()
  tags: Tag[];
}
