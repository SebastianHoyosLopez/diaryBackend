import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { SerenatasModule } from './serenatas/serenatas.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [__dirname + process.env.TYPEORM_ENTITIES],
      synchronize: true,
      autoLoadEntities: true,
      migrations: ["dist/migrations/*.js, .ts"],
    }),

    SerenatasModule,
    UsersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
