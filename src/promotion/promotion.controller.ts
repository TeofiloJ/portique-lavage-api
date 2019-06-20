import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { PromotionService } from './promotion.service';
import { Promotion as PromotionInterface } from './interfaces/promotion.interface';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@Controller('promotions')
@ApiUseTags('Promotions')
export class PromotionController {
    constructor(private readonly promotionService: PromotionService) { }

    @Post()
    async create(@Body() CreatePromotionDto: CreatePromotionDto) {
        this.promotionService.create(CreatePromotionDto);
    }

    @Get()
    async findAll(): Promise<PromotionInterface[]> {
        return this.promotionService.findAll();
    }

    @Get(':promotionID')
    async find(@Param('promotionID') ID) {
         const promotion = await this.promotionService.findByID(ID);
         return promotion;
    }

	@Delete('promotionID')
	async delete(@Param('promotionID') promotionID) {
	const promotion = await this.promotionService.delete(promotionID);
	return promotion;
	}
}