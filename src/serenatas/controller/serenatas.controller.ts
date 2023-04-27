import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { IResponse } from 'src/utils/interFaces';
import { SerenatasService } from '../services/serenatas.service';
import { CreateSerenataDto, UpdateSerenataDto } from '../dtos/serenata.dtos';

@Controller('serenatas')
export class SerenatasController {
  constructor(private serenatasService: SerenatasService) {}

  @Get()
  async getSerenatas() {
    return await this.serenatasService.findAllSerenatas();
  }

  @Get(":id")
  async getOneSerenata(@Param('id') id: string) {
    return await this.serenatasService.findOneSerenata(id)
  }

  @Get("History") 
  async getRecordSerenatas() {
    return await this.serenatasService.findRecord();
  }

  @Post()
  async create(@Body() createSerenataDto: CreateSerenataDto) {
    const result = await this.serenatasService.create(createSerenataDto);
    return result;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateSerenataDto) {
    return this.serenatasService.update(id, payload)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    // return this.serenatasService.remove(+id);
    const serenataId = id;
    const result = await this.serenatasService.remove(serenataId);
    const response: IResponse = {
      data: result,
      error: null,
      message: 'Serenata eliminada',
    };
    return response; 
  }
}
