import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CustomerEntity } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(CustomerEntity) private customerRepo: Repository<CustomerEntity>,
  ) {}

  findAll() {
    return this.customerRepo.find();
  }

  // async findOne(id: number) {
  //   const customer = await this.customerRepo.findOne({ where: {id}});
  //   if (!customer) {
  //     throw new NotFoundException(`Customer #${id} not found`);
  //   }
  //   return customer;
  // }

  async findOne(id: number) {
    const customer = await this.customerRepo
      .createQueryBuilder('customer')
      .leftJoinAndSelect('customer.serenatas', 'serenata')
      .where('customer.id = :id', { id })
      .getOne();

    if (!customer) {
      throw new NotFoundException(`Customer #${id} not found`);
    }
    return customer;
  }

  create(data: CreateCustomerDto) {
    const newCustomer = this.customerRepo.create(data);
    return this.customerRepo.save(newCustomer);
  }

  async update(id: number, changes: UpdateCustomerDto) {
    const customer = await this.findOne(id);
    this.customerRepo.merge(customer, changes);
    return this.customerRepo.save(customer);
  }

  remove(id: number) {
    return this.customerRepo.delete(id);
  }
}