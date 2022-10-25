
import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { ApiModule } from 'src/api/api.module';
import { ServiceModule } from 'src/infrastructure/services/service.module';
import { UserService } from 'src/infrastructure/services/users.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [
    ServiceModule,
    PassportModule,
    forwardRef(()=> ServiceModule),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '200s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, JwtAuthGuard, RolesGuard],
  exports: [AuthService],
})
export class AuthModule {}