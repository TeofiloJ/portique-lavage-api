import { ApiModelProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiModelProperty()
    readonly ID: number
    readonly name: string
}