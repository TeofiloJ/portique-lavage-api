import { Module } from '@nestjs/common';
import { PortiqueController } from './portique.controller';
import { PortiqueService } from './portique.service';
import { PortiqueProviders } from './portique.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PortiqueController],
  providers: [PortiqueService, ...PortiqueProviders,]
})

export class PortiqueModule {}