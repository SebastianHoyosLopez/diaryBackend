import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SerenatasService } from '../services/serenatas.service';
import { CreateSerenataDto } from '../dtos/serenata.dtos';

@Controller('serenatas')
export class SerenatasController {
  constructor(private serenatasService: SerenatasService) {}

  @Get()
 async getSerenatas() {
    return await this.serenatasService.findAllSerenatas();
  }

  @Post()
  async create(@Body() payload: CreateSerenataDto) {
    const result = await this.serenatasService.create(payload)
    return result
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.serenatasService.remove(+id);
  }
}
