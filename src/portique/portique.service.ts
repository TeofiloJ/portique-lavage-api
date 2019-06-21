import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Portique } from './interfaces/portique.interface';
import { CreatePortiqueDto } from './dto/create-portique.dto';
import { PORTIQUE_MODEL_PROVIDER } from '../constants';
import { Service } from '../service'

@Injectable()
export class PortiqueService extends Service<Model<Portique>, CreatePortiqueDto, Portique> {
    constructor(
        @Inject(PORTIQUE_MODEL_PROVIDER) private readonly portiqueModel: Model<Portique>) {
            super(portiqueModel)
        }

    
}