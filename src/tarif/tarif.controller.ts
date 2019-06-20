import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { CreateTarifDto } from './dto/create-tarif.dto';
import { TarifService } from './tarif.service';
import { Tarif as TarifInterface } from './interfaces/tarif.interface';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@Controller('tarifs')
@ApiUseTags('Tarifs')
export class TarifController {
    constructor(private readonly tarifService: TarifService) { }

    @Post()
    async create(@Body() CreateTarifDto: CreateTarifDto) {
        this.tarifService.create(CreateTarifDto);
    }

    @Get()
    async findAll(): Promise<TarifInterface[]> {
        return this.tarifService.findAll();
    }

    @Get(':tarifID')
    async find(@Param('tarifID') ID) {
         const tarif = await this.tarifService.findByID(ID);
         return tarif;
    }

	@Delete('tarifID')
	async delete(@Param('tarifID') tarifID) {
	const tarif = await this.tarifService.delete(tarifID);
	return tarif;
	}
}