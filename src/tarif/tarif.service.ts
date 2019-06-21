import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Tarif } from './interfaces/tarif.interface';
import { CreateTarifDto } from './dto/create-tarif.dto';
import { TARIF_MODEL_PROVIDER } from '../constants';
import { Service } from '../service'

@Injectable()
export class TarifService extends Service<Model<Tarif>,CreateTarifDto, Tarif>{
    constructor(
        @Inject(TARIF_MODEL_PROVIDER) private readonly tarifModel: Model<Tarif>) {
            super(tarifModel)
         }    
}