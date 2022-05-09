import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'products' })
export class Product {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  collectionType: string;

  @Property()
  isActive: boolean;

  @Property({ onCreate: () => new Date() })
  createdAt: Date;

  @Property({ onCreate: () => new Date(), onUpdate: () => new Date() })
  updatedAt: Date;
}
