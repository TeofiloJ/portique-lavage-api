import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Portique } from './interfaces/portique.interface';
import { CreatePortiqueDto } from './dto/create-portique.dto';
import { PORTIQUE_MODEL_PROVIDER } from '../constants';

@Injectable()
export class PortiqueService {
    constructor(
        @Inject(Portique_MODEL_PROVIDER) private readonly PortqueModel: Model<Portique>) { }

    async create(CreatePortiqueDto: CreatePortiqueDto): Promise<Portique> {
        const createdPortique = new this.PortiqueModel(CreatePortiqueDto);
        return await createdPortque.save();
    }

    async findAll(): Promise<Portique[]> {
        return await this.portiqueModel.find().exec();
    }

    async findByID(ID): Promise<Portique[]> {
        const portique = await this.portiqueModel.find({ PortiqueID : ID} );
        return portique;
    }

    async update(PortiqueID, createPortiqueDTO: CreatePortiqueDto): Promise<Portique> {
        const updatedPortique =  this.portiqueModel
            .findByIdAndUpdate(PortiqueID, CreatePortiqueDto, { new: true });
        return await updatedPortique;
    }

    async delete(ID): Promise<any> {
        const deletedPortique = await this.portiqueModel.remove({ portiqueID : ID });
        return deletedPortique;
    }
}