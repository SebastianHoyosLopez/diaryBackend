import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { SerenatasService } from '../services/serenatas.service';
import { CreateSerenataDto } from '../dtos/serenata.dtos';
import { IResponse } from 'src/utils/interFaces';

@Controller('serenatas')
export class SerenatasController {
  constructor(private serenatasService: SerenatasService) {}

  @Get()
  async getSerenatas() {
    return await this.serenatasService.findAllSerenatas();
  }

  @Post()
  async create(@Body() createSerenataDto: CreateSerenataDto) {
    const result = await this.serenatasService.create(createSerenataDto);
    return result;
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
