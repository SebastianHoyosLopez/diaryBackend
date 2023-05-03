import { UserEntity } from './user.entity';
import { SerenataEntity } from '../../serenatas/entities/serenata.entity';

export class Associates {
  date: Date;
  user: UserEntity;
  serenatas: SerenataEntity[];
}
