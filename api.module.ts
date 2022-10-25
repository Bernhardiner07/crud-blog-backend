import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { ServiceModule } from '../infrastructure/services/service.module';
import { AppController } from './controllers/app.controller';
import { TileController } from './controllers/tile.controller';
import { UsersController } from './controllers/user.controller';

@Module({
  imports: [ServiceModule, AuthModule],
  controllers: [TileController, UsersController, AppController],
  exports: [],
})
export class ApiModule {}
