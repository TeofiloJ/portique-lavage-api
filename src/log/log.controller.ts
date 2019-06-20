import { Controller, Get, Param, Post, Body, Query, Delete  } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { LogService } from './log.service';
import { Log as LogInterface } from './interfaces/log.interface';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@Controller('log')
@ApiUseTags('Log')
export class LogController {
    constructor(private readonly logService: LogService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() createLogDto: CreateLogDto) {
        this.logService.create(createLogDto);
    }

    @Get()
    async findAll(): Promise<LogInterface[]> {
        return this.logService.findAll();
    }

    @Get(':logID')
    async find(@Param('logID') logID): Promise<LogInterface> {
        const log = await this.logService.findByID(logID);
        return log;
    }

    @Delete(':logID')
    async delete(@Param('logID') logID) {
        const log = await this.logService.delete(logID);
        return log;
    }
}