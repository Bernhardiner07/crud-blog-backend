import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersController } from 'src/api/controllers/user.controller';

import { Connection, Repository } from 'typeorm';

import { BaseEntity } from '../../domain/models/base.entity';
import { Post } from '../../domain/models/Tile.entity';
import { User } from '../../domain/models/user.entity';


@Injectable()
export abstract class BaseService<T extends BaseEntity> {
  @Inject(Connection)
  private readonly connection: Connection;

  @InjectRepository(Post)
  protected readonly PostRepository: Repository<Post>;

  @InjectRepository(User)
  protected readonly usersRepository: Repository<User>;

}
