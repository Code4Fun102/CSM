import crypto from 'crypto';
import {
  Entity,
  ManyToOne,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { User } from './User';

@Entity({ tableName: 'user_tokens' })
export class UserToken {
  [OptionalProps]: 'createdAt';

  @PrimaryKey({ onCreate: () => crypto.randomUUID() })
  uuid: string;

  @ManyToOne()
  user: User;

  @Property()
  expiredIn: number;

  @Property({ onCreate: () => new Date() })
  createdAt: Date;
}
