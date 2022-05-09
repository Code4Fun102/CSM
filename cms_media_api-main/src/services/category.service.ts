import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { Category } from '../entities';
import { CreateCategoryDto, UpdateCategoryDto } from '../dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: EntityRepository<Category>,
  ) {}

  async list() {
    return this.categoryRepo.findAndCount({});
  }

  async findOne(id: number) {
    return this.categoryRepo.findOne({ id });
  }

  async create(data: CreateCategoryDto) {
    const newCategory = this.categoryRepo.create(data);
    await this.categoryRepo.persistAndFlush(newCategory);
    return newCategory;
  }

  async update(id: number, data: UpdateCategoryDto) {
    const category = await this.categoryRepo.findOne({ id });
    if (!category) {
      throw new NotFoundException();
    }
    this.categoryRepo.assign(category, data);
    await this.categoryRepo.flush();
    return category;
  }

  async remove(id: number) {
    return this.categoryRepo.nativeDelete({ id });
  }
}
