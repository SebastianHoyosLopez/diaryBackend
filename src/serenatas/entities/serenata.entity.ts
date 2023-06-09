import {
  Entity,
  Column,
  PrimaryColumn,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { CustomerEntity } from '../../users/entities/customer.entity';

@Entity()
export class SerenataEntity {
  @Column({ unique: true })
  @PrimaryColumn()
  id: string;

  @Column()
  date: string;

  @Column()
  hour: string;

  @Column()
  municipality: string;

  @Column()
  name: string;

  @Column()
  place: string;

  @DeleteDateColumn()
  deletedAt?: Date;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @ManyToOne(() => CustomerEntity, (customer) => customer.serenatas)
  customer: CustomerEntity;
}
