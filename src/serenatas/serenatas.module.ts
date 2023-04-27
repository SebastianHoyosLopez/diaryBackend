import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SerenatasService } from './services/serenatas.service';
import { SerenataEntity } from './entities/serenata.entity';
import { SerenatasController } from './controller/serenatas.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SerenataEntity])],
  controllers: [SerenatasController],
  providers: [SerenatasService]
})
export class SerenatasModule {}
