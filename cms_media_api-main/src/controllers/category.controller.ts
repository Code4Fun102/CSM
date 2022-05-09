import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dto';

@ApiTags('categories')
@Controller({ path: 'categories', version: '1' })
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async list() {
    return this.categoryService.list();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateCategoryDto) {
    return this.categoryService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: UpdateCategoryDto) {
    return this.categoryService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.categoryService.remove(id);
  }
}
