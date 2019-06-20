import { Module } from '@nestjs/common';
import { PromotionController } from './promotion.controller';
import { PromotionService } from './promotion.service';
import { PromotionProviders } from './promotion.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PromotionController],
  providers: [PromotionService, ...PromotionProviders,]
})

export class PromotionModule {}