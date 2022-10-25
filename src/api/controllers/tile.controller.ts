import { Controller, Get, Post, Body, Param, Inject, Put, Delete , Query, UseGuards} from '@nestjs/common';
import { hasRoles } from 'src/auth/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Tile } from 'src/domain/models/Tile.entity';
import { UserRole } from 'src/domain/models/user.entity';
import { TileDAO } from '../../domain/dao/Tile.dao'
import { TileCreateDTO } from '../../domain/dto/Tile-create.dto';
import { TileService } from '../../infrastructure/services/Tile.service';
@UseGuards(JwtAuthGuard, RolesGuard)

@Controller('Tile')
export class TileController {
  @Inject(TileService)
  private readonly TileService: TileService;

  @Get()
  public async findAll(): Promise<TileDAO[]> {
    return this.TileService.findAll();
  }

  @Get(':id')
  public async findOne(@Param('id') id: number) {
    return this.TileService.findOne(id);
  }

  @hasRoles(UserRole.ADMIN)
  @Post()
  public async create(@Body() payload: TileCreateDTO): Promise<TileDAO> {
    return this.TileService.create(payload);
  }
 
  @hasRoles(UserRole.ADMIN)
  @Put(':id')
  public update(@Param('id') id, @Body() updateTileDTO: Tile): Promise<Tile>{
    return this.TileService.updateTile(id, updateTileDTO);
  }

  @hasRoles(UserRole.ADMIN)
  @Delete(':id')
  public async deleteTileById(@Param('id') id: number) {
    return this.TileService.deleteTileById(id);
  }
}