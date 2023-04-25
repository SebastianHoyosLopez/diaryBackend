import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { SerenataEntity } from '../entities/serenata.entity';
import { CreateSerenataDto } from '../dtos/serenata.dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, FindOneOptions, MoreThanOrEqual, LessThanOrEqual, MoreThan, LessThan } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SerenatasService {
  constructor(
    @InjectRepository(SerenataEntity)
    private readonly serenataRepo: Repository<SerenataEntity>,
  ) {}

  async findAllSerenatas(): Promise<SerenataEntity[]> {
    const currentDate = new Date();
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    return await this.serenataRepo.find({
      where: {
        date: MoreThanOrEqual(yesterday.toISOString()),
        // hour: MoreThanOrEqual(currentDate.getHours().toString()),
      },
      order: {
        date: 'ASC',
        hour: 'ASC',
      },
    });
  }

  async create(data: CreateSerenataDto): Promise<SerenataEntity> {
    const serenata = plainToClass(CreateSerenataDto, data);
    const errors = await validate(serenata);
    if (errors.length > 0) {
      throw new HttpException(
        { errors: errors.map((e) => e.constraints) },
        HttpStatus.BAD_REQUEST,
      );
    }

    // const conuterIdNew = this.conuterId + 1;
    const serenataExist = await this.findOne({
      where: { date: data.date, hour: data.hour },
    });

    if (serenataExist) {
      throw new HttpException('SERENATA_EXISTS', HttpStatus.CONFLICT);
    }

    const newSerenata = this.serenataRepo.create({
      id: uuidv4(),
      ...data,
    });
    await this.serenataRepo.save(newSerenata);
    return newSerenata;
  }

  async findOne(
    filter: FindOneOptions<SerenataEntity>,
  ): Promise<SerenataEntity> {
    return await this.serenataRepo.findOne(filter);
  }
 
  async findOneOrFail(
    filter?: FindOneOptions<SerenataEntity>,
  ): Promise<SerenataEntity> {
    const serenataExist = await this.findOne(filter);
    if (!serenataExist) {
      throw new HttpException('SERENATA_NOT_FOUND', HttpStatus.CONFLICT);
    }
    return serenataExist;
  }

  async remove(id): Promise<any> {
    const serenataExist = await this.findOneOrFail({
      where: { id: id },
    });
    return await this.serenataRepo.softDelete({ id: serenataExist.id });

  }
}
