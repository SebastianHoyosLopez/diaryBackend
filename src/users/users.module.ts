import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { SerenatasModule } from 'src/serenatas/serenatas.module';
import { CustomerEntity } from './entities/customer.entity';
import { CustomersService } from './services/customer.service';
import { CustomerController } from './controllers/customer.controller';

@Module({
  imports: [
    SerenatasModule,
    TypeOrmModule.forFeature([UserEntity, CustomerEntity]),
  ],
  controllers: [UsersController, CustomerController],
  providers: [UsersService, CustomersService],
})
export class UsersModule {}
