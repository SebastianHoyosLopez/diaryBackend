import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { SerenatasModule } from 'src/serenatas/serenatas.module';
import { CustomerEntity } from './entities/customer.entity';

@Module({
  imports: [
    SerenatasModule,
    TypeOrmModule.forFeature([UserEntity, CustomerEntity]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
