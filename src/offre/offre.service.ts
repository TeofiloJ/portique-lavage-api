import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Offre } from './interfaces/offre.interface';
import { CreateOffreDto } from './dto/create-offre.dto';
import { OFFRE_MODEL_PROVIDER } from '../constants';
import { Service } from '../service'

@Injectable()
export class OffreService extends Service<Model<Offre>, CreateOffreDto, Offre> {
    constructor(
        @Inject(OFFRE_MODEL_PROVIDER) private readonly offreModel: Model<Offre>) {
            super(offreModel);
        }

    
}