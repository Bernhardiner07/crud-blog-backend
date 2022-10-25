import { Module, HttpModule } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PostService } from './tile.service';
import { DatabaseModule } from '../database/database.module';
import { Post } from '../../domain/models/Tile.entity';



import { ConfigModule } from '../../common/config/config.module';
import { AuthModule } from 'src/auth/auth.module';
import { UserService } from 'src/infrastructure/services/users.service';
import { User } from 'src/domain/models/user.entity';


@Module({
  imports: [ConfigModule, DatabaseModule, TypeOrmModule.forFeature([Post, User])],
  providers: [PostService, UserService],
  exports: [PostService, UserService],
})
export class ServiceModule {}

