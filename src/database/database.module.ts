import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const API_KEY = process.env.TYPEORM_HOST;
const API_KEY_PROD = 'PROD123456';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ], 
  exports: ['API_KEY'],
})
export class DatabaseModule {}
