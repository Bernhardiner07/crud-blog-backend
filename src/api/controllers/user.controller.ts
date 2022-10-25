import { Controller, Get, Post, Body, Param, Inject, Put, Delete , Query, UseGuards} from '@nestjs/common';
import { create } from 'domain';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserCreateDTO } from 'src/domain/dto/user-create.dto';
import { User, UserRole } from 'src/domain/models/user.entity';
import { UserService } from '../../infrastructure/services/users.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('Users')
export class UsersController {
  constructor(private readonly userService: UserService) {}


  @hasRoles(UserRole.ADMIN)
  @Post()
  async create(@Body() user: User) {
    return this.userService.create(user)
  }

  @Get(':username')
  public async findOne(@Param('username') username: string) {
    return await this.userService.findOneByUsername(username);
  }
}