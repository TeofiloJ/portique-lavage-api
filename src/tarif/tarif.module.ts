import { Module } from '@nestjs/common';
import { PortiqueController } from './tarif.controller';
import { TarifService } from './tarif.service';
import { TarifProviders } from './tarif.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TarifController],
  providers: [TarifService, ...TarifProviders,]
})

export class TarifModule {}