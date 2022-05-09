import {
  Entity,
  ManyToOne,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Category } from './Category';

@Entity({ tableName: 'items' })
export class Item {
  [OptionalProps]: 'createdAt' | 'isActive' | 'updatedAt';

  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @ManyToOne()
  category: Category;

  @Property()
  isPremium: boolean;

  @Property({ type: 'json', nullable: true })
  charing?: string[];

  @Property({ type: 'json', nullable: true })
  thumbs?: string[];

  @Property({ type: 'json', nullable: true })
  thumbvideos?: string[];

  @Property({ type: 'json', nullable: true })
  videos?: string[];

  @Property()
  priority: number;

  @Property({ type: 'json', nullable: true })
  sounds?: string[];

  @Property({ default: true })
  isActive: boolean;

  @Property({ onCreate: () => new Date() })
  createdAt: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  updatedAt: Date;
}
