import { Module } from '@nestjs/common';
import { OffreController } from './offre.controller';
import { OffreService } from './offre.service';
import { OffreProviders } from './offre.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OffreController],
  providers: [OffreService, ...OffreProviders]
})

export class OffreserviceModule {}