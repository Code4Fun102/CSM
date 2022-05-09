import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { Category, Item } from '../entities';
import { CreateItemDto } from '../dto/create-item.dto';

@Injectable()
export class AssetsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepo: EntityRepository<Item>,
    @InjectRepository(Category)
    private readonly categoryRepo: EntityRepository<Category>,
  ) {}

  async list() {
    return this.itemRepo.findAndCount({});
  }

  async findOne(id: number) {
    return this.itemRepo.findOne({ id });
  }

  async create(data: CreateItemDto) {
    const category = await this.categoryRepo.findOne({ name: data.name });
    const newItem = this.itemRepo.create({
      category,
      ...data,
    });
    await this.itemRepo.persistAndFlush(newItem);
    return newItem;
  }

  async update(id: number, data: CreateItemDto) {
    const item = await this.itemRepo.findOne({ id });
    if (!item) {
      throw new NotFoundException();
    }
    this.itemRepo.assign(item, data);
    await this.itemRepo.flush();
    return item;
  }

  async remove(id: number) {
    return this.itemRepo.nativeDelete({ id });
  }
}
