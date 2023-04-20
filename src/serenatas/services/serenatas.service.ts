import { Injectable, NotFoundException } from '@nestjs/common';
import { Serenata } from '../entities/serenata.entity';
import { CreateSerenataDto } from '../dtos/serenata.dtos';

@Injectable()
export class SerenatasService {
  private conuterId = 1;
  private serenatas: Serenata[] = [
    {
      id: 1,
      date: '2023/04/20',
      hour: '20:10',
      municipality: 'rionegro',
      name: 'tatn',
      place: 'cerca',
    },
  ];

  findAllSerenatas() {
    return this.serenatas;
  }

  create(data: CreateSerenataDto) {
    this.conuterId = this.conuterId + 1;
    const newSerenata = {
      id: this.conuterId,
      ...data,
    }
    this.serenatas.push(newSerenata);
    return newSerenata
  }

  remove(id: number) {
    const index = this.serenatas.findIndex((item) => item.id === id);
    if(index === -1) {
      throw new NotFoundException(`Serenata #${id} not found`)
    }
    this.serenatas.splice(index, 1);
    return true;
  }
}
