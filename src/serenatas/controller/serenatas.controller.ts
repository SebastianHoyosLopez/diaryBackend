import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SerenatasService } from '../services/serenatas.service';
import { CreateSerenataDto } from '../dtos/serenata.dtos';

@Controller('serenatas')
export class SerenatasController {
  constructor(private serenatasService: SerenatasService) {}

  @Get()
  getSerenatas() {
    return this.serenatasService.findAllSerenatas();
  }

  @Post()
  create(@Body() payload: CreateSerenataDto) {
    return this.serenatasService.create(payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.serenatasService.remove(+id);
  }
}
