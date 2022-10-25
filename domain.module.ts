import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tile } from './models/Tile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tile])],
  providers: [],
  exports: [],
})
export class DomainModule {}
