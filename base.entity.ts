import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeepPartial,
  Column,
  Generated,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Generated('uuid')
  @Column({ name: 'uuid', unique: true })
  public uuid: string;

  @CreateDateColumn({ name: 'created_at', type: 'datetime', nullable: false })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'datetime', nullable: false })
  public updatedAt: Date;

  protected constructor(input?: DeepPartial<BaseEntity>) {
    if (input) {
      for (const [key, value] of Object.entries(input)) {
        this[key] = value;
      }
    }
  }
}
