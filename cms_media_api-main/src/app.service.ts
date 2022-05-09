import path from 'path';
import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { MikroORM, UseRequestContext } from '@mikro-orm/core';
import _ from 'lodash';
import { Category, Item } from './entities';

@Injectable()
export class AppService {
  constructor(
    private readonly orm: MikroORM,
    @InjectRepository(Category)
    private readonly categoryRepo: EntityRepository<Category>,
    @InjectRepository(Item)
    private readonly itemRepo: EntityRepository<Item>,
  ) {
    setTimeout(async () => {
      await this.readCategory('charging_category.json');
      await this.readCategory('livewallpaper_category.json');
      await this.readItem('charging_item.json');
      await this.readItem('livewallpaper_item.json');
    }, 2000);
  }

  @UseRequestContext()
  async readCategory(file: string) {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), 'static', file),
      'utf8',
    );
    const categoryJson = JSON.parse(fileContent);
    const cateNames = _.map<string>(categoryJson, 'name');
    const categories = await this.categoryRepo.find({
      name: { $in: cateNames },
    });
    for (const cate of categoryJson) {
      const exist = _.find(categories, ['name', cate.name]);
      if (exist) {
        this.categoryRepo.assign(exist, cate);
        continue;
      }
      const newCate = this.categoryRepo.create(cate);
      this.categoryRepo.persist(newCate);
    }
    await this.categoryRepo.flush();
  }

  @UseRequestContext()
  async readItem(file: string) {
    const fileContent = fs.readFileSync(
      path.join(process.cwd(), 'static', file),
      'utf8',
    );
    const itemJson = JSON.parse(fileContent);
    const { idName, datas } = itemJson;
    const category = await this.categoryRepo.findOne({ name: idName });
    for (const item of datas) {
      const newItem = this.itemRepo.create({
        category,
        name: idName,
        ...item,
      });
      await this.itemRepo.persistAndFlush(newItem);
    }
    await this.categoryRepo.flush();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
