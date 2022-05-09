import {
  Entity,
  ManyToOne,
  OptionalProps,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Product } from './Product';

@Entity({ tableName: 'categories' })
export class Category {
  [OptionalProps]: 'createdAt' | 'isActive' | 'updatedAt';

  @PrimaryKey()
  id: number;

  @ManyToOne({ nullable: true })
  product?: Product;

  @Property()
  name: string;

  @Property({ type: 'json' })
  icon: string[];

  @Property({ type: 'json' })
  links: string[];

  @Property({ type: 'json', nullable: true })
  background?: string[];

  @Property({ default: true })
  isActive: boolean;

  @Property({ onCreate: () => new Date() })
  createdAt: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  updatedAt: Date;
}
