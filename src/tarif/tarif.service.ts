import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Tarif } from './interfaces/tarif.interface';
import { CreateUserDto } from './dto/create-tarif.dto';
import { TARIF_MODEL_PROVIDER } from '../constants';

@Injectable()
export class TarifService {
    constructor(
        @Inject(TARIF_MODEL_PROVIDER) private readonly tarifModel: Model<Tarif>) { }

    async create(CreateTarifDto: CreateTarifDto): Promise<Tarif> {
        const createdTarif = new this.tarifModel(CreateTarifDto);
        return await createdTarif.save();
    }

    async findAll(): Promise<Tarif[]> {
        return await this.tarifModel.find().exec();
    }

	async findbyID(ID): Promise<Tarif[]> {
		const tarif = await this.tarifModel.find({TarifID : ID});
		return tarif;
    }

    async update(TarifID, createTarifDTO: CreateTarifDto): Promise<Tarif> {
        const updatedTarif =  this.tarifModel
            .findByIdAndUpdate(TarifID, CreateTarifDto, { new: true });
        return await updatedTarif;
    }

    async delete(tarifID): Promise<any> {
        const deletedTarif = await this.tarifModel.findByIdAndRemove(tarifID);
        return deletedTarif;
    }
}