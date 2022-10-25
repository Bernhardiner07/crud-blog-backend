import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../database/database.module';
import { OnModuleInit, Module, Inject } from '@nestjs/common';
import { DomainModule } from '../../domain/domain.module';
import { Tile } from '../../domain/models/Tile.entity';
import { TileService } from '../services/Tile.service';
import { ConfigModule } from '../../common/config/config.module';
import { ServiceModule } from '../services/service.module';
import { User } from 'src/domain/models/user.entity';

const tile: Tile[] = [
  new Tile({
    titel: "Kündigung",
    datum: "16.08.2022",
    beschreibung: "Wie passiert",
    inhalt: "Was mache ich jetzt",
    hoster: "Timo Blumer",
  })
];


@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    DomainModule,
    ServiceModule,
    TypeOrmModule.forFeature([Tile]),
  ],
})
export class SeedModule implements OnModuleInit {
  @Inject()
  private TileService: TileService;

  async onModuleInit() {
    await Promise.all(
    Tile.map(async (u) => {
        await this.TileService.create(u);
      }),
    );

  }
}
