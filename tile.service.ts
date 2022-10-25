import { HttpException, Injectable } from '@nestjs/common';

import { BaseService } from './base.service';

import { TileDAO } from '../../domain/dao/tile.dao';
import { Tile } from '../../domain/models/Tile.entity';
import { TileCreateDTO } from 'src/domain/dto/Tile-create.dto';

@Injectable()
export class TileService extends BaseService<Tile> {
  async findAll(): Promise<TileDAO[]> {
    return this.TileRepository.find();
  }

  public async findOne(id: number): Promise<TileDAO> {
    return this.TileRepository.findOne(id);
  }

  async create(payload: TileCreateDTO): Promise<TileDAO> {
    return this.TileRepository.save(new Tile(payload));
  }

  public async updateTile(_id: number, Tile: Tile): Promise<any> {
    return await this.TileRepository.update({ id: _id }, Tile)
  }

  public deleteTileById(id: number): Promise<any> {
    return this.TileRepository.delete(id) ;
  }
}
