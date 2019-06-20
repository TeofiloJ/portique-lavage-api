import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

export class Service<M, DTO> {
    constructor(private readonly model: Model<any>) { }

    async create(Dto: DTO): Promise<M> {
        const createdEntity = new this.model(Dto);
        return await createdEntity.save();
    }

    async findAll(): Promise<M[]> {
        return await this.model.find().exec();
    }

    async findByID(EntityID): Promise<M[]> {
        const user = await this.model.find({ ID : EntityID} );
        return user;
    }

    async update(EntityID, Dto: DTO): Promise<M> {
        const updatedEntity =  this.model
            .findByIdAndUpdate(EntityID, Dto, { new: true });
        return await updatedEntity;
    }

    async delete(EntityID): Promise<any> {
        const deletedEntity = await this.model.remove({ ID : EntityID });
        return deletedEntity;
    }
}