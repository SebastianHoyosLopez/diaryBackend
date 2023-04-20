import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerenatasModule } from './serenatas/serenatas.module';

@Module({
  imports: [SerenatasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
