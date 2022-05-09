import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Category } from './Category';

@Entity({ tableName: 'category_configs' })
export class CategoryConfig {
  @PrimaryKey()
  id: number;

  @ManyToOne()
  category: Category;

  @Property()
  key: string;

  @Property({ type: 'json', nullable: true })
  configs: object;
}
