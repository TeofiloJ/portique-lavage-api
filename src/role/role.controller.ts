import { Controller, Get, Param, Post, Body, Query, Delete  } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleService } from './role.service';
import { Role as RoleInterface } from './interfaces/role.interface';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';

@Controller('role')
@ApiUseTags('Role')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() createRoleDto: CreateRoleDto) {
        this.roleService.create(createRoleDto);
    }

    @Get()
    async findAll(): Promise<RoleInterface[]> {
        return this.roleService.findAll();
    }

    @Get(':roleID')
    async find(@Param('roleID') roleID): Promise<RoleInterface> {
        const role = await this.roleService.findByID(roleID);
        return role;
    }

    @Delete(':roleID')
    async delete(@Param('roleID') roleID) {
        const role = await this.roleService.delete(roleID);
        return role;
    }
}