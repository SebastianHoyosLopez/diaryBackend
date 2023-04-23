import { Module } from '@nestjs/common';
import { SerenatasController } from './controller/serenatas.controller';
import { SerenatasService } from './services/serenatas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerenataEntity } from './entities/serenata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SerenataEntity])],
  controllers: [SerenatasController],
  providers: [SerenatasService]
})
export class SerenatasModule {}
