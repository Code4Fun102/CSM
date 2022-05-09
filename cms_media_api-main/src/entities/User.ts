import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { UserRole } from '../enums';

@Entity({ tableName: 'users' })
export class User {
  @PrimaryKey()
  id: number;

  @Property()
  username: string;

  @Property()
  email: string;

  @Property()
  password: string;

  @Property()
  phoneNumber: string;

  @Property({ nullable: true })
  status?: string;

  @Property()
  role: UserRole;

  @Property({ nullable: true })
  lastLogin?: Date;
}
