import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SerenatasService } from './services/serenatas.service';
import { SerenataEntity } from './entities/serenata.entity';
import { SerenatasController } from './controller/serenatas.controller';
import { CustomerEntity } from '../users/entities/customer.entity';
import { CustomerController } from 'src/users/controllers/customer.controller';
import { CustomersService } from 'src/users/services/customer.service';

@Module({
  imports: [TypeOrmModule.forFeature([SerenataEntity, CustomerEntity])],
  controllers: [SerenatasController, CustomerController],
  providers: [SerenatasService, CustomersService],
  exports: [SerenatasService]
})
export class SerenatasModule {}
