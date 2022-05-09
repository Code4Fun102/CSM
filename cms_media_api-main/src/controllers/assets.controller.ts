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
import { AssetsService } from '../services/assets.service';
import { CreateItemDto } from '../dto/create-item.dto';

@ApiTags('assets')
@Controller({ path: 'assets', version: '1' })
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  async list() {
    return this.assetsService.list();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.assetsService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateItemDto) {
    return this.assetsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: CreateItemDto) {
    return this.assetsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.assetsService.remove(id);
  }
}
