import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Promotion } from './interfaces/promotion.interface';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { PROMOTION_MODEL_PROVIDER } from '../constants';
import { Service } from '../service'

@Injectable()
export class PromotionService extends Service<Model<Promotion>,CreatePromotionDto>{
    constructor(
        @Inject(PROMOTION_MODEL_PROVIDER) private readonly promotionModel: Model<Promotion>) {
            super(promotionModel)
         }    
}