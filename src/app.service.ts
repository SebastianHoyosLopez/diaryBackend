import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apikey: string
    private config: ConfigService
    ) {}

  getHello(): string {
    const apikey = this.config.get('TYPEORM_PASSWORD')
    const nameDB = this.config.get('TYPEORM_DATABASE')
    return `Hello World! ${apikey} - ${nameDB}`;
  }
}
