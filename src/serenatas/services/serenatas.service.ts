import { Injectable, NotFoundException } from '@nestjs/common';
import { SerenataEntity } from '../entities/serenata.entity';
import { CreateSerenataDto } from '../dtos/serenata.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';

@Injectable()
export class SerenatasService {
  constructor(
    @InjectRepository(SerenataEntity)
    private readonly serenataRepo: Repository<SerenataEntity>
  ) {}

  private conuterId = 1;
  private serenatas: SerenataEntity[] = [
    {
      id: 1,
      date: '2023/04/20',
      hour: '20:10',
      municipality: 'rionegro',
      name: 'tatn',
      place: 'cerca',
    },
  ];

  async findAllSerenatas(): Promise<SerenataEntity[]>{
    return await this.serenataRepo.find();
  }

  async create(data: CreateSerenataDto): Promise<SerenataEntity> {
    this.conuterId = this.conuterId + 1;
    // const newSerenata = {
    //   id: this.conuterId,
    //   ...data,
    // }
    const newSerenata = this.serenataRepo.create({
      id: this.conuterId,
      ...data
    })
    // this.serenatas.push(newSerenata);
    await this.serenataRepo.save(newSerenata)
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
