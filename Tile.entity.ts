import { DeepPartial, Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity(Tile.name.toLowerCase())
export class Tile extends BaseEntity {
  constructor(input?: DeepPartial<Tile>) {
    super(input);
  }
  @Column({ name: 'titel' })
    titel: String;

  @Column({ name: 'datum' })
    datum: Date;
  
  @Column({ name: 'beschreibung' })
    beschreiung: String;

  @Column({ name: 'inhalt' })
    inhalt: String;

  @Column({ name: 'hoster' })
    hoster: String;
}

