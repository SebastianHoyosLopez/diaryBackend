import { Module } from '@nestjs/common';
import { SerenatasController } from './controller/serenatas.controller';
import { SerenatasService } from './services/serenatas.service';

@Module({
  controllers: [SerenatasController],
  providers: [SerenatasService]
})
export class SerenatasModule {}
