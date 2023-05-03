import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, MoreThan, Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { UserEntity } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/CreateUserDto.dtos';

import { SerenatasService } from '../../serenatas/services/serenatas.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
    private readonly serenatasService: SerenatasService,
  ) {}

  async getOne(filter: FindOneOptions<UserEntity>): Promise<UserEntity> {
    return await this.usersRepo.findOne(filter);
  }

  async getMany(filter: FindManyOptions<UserEntity>): Promise<UserEntity[]> {
    return await this.usersRepo.find(filter);
  }

  async getUserById(userId: string): Promise<UserEntity> {
    const userExist = await this.getOneOrFail({
      where: { id: userId },
    });

    return userExist;
  }

  async create(data: CreateUserDto) {
    const newUser = this.usersRepo.create({ ...data, id: uuidv4() });
    return this.usersRepo.save(newUser);
  }

  async update(id: string, changes: UpdateUserDto) {
    const user = await this.getUserById(id);
    this.usersRepo.merge(user, changes);
    return this.usersRepo.save(user);
  }

  async getOneOrFail(filter?: FindOneOptions<UserEntity>) {
    const userExist = await this.getOne(filter);
    if (!userExist) {
      throw new HttpException('USER_NOT_FOUND', HttpStatus.CONFLICT);
    }
    return userExist;
  }

  async remove(id: string) {
    const userExist = await this.getOneOrFail({
      where: { id: id },
    });

    return await this.usersRepo.softDelete({ id: userExist.id });
  }

  async getSerenatasAssociate(id: string) {
    const userExist = await this.getUserById(id);
    return {
      date: new Date(),
      user: userExist,
      serenatas: await this.serenatasService.findAllSerenatas(),
    };
  }
}
