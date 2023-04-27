import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerenatasModule } from './serenatas/serenatas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'diaryMariachi',
      password: 'diaryMariachi2023',
      database: 'diarydb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    SerenatasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
