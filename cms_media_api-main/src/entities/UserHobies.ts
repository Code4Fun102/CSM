import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { User } from './User';

@Entity({ tableName: 'user_hobies' })
export class UserHobies {
  @PrimaryKey()
  id: number;

  @ManyToOne()
  user: User;

  @Property({ type: 'json', nullable: true })
  hobies: object;
}
