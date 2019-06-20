import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { CreateTarifDto } from './dto/create-tarif.dto';
import { TarifService } from './tarif.service';
import { Tarif as TarifInterface } from './interfaces/tarif.interface';

@Controller('tarif')
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

    @Get(':userID')
    async getUser(@Param('userID') userID) {
         const user = await this.userService.getUser(userID);
         return user;
    }

	@Delete('tarifID')
	async delete(@Param('taifID') tarifID) {
	const tarif = await this.tarifService.delete(tarifID);
	return tarif;
	}
}