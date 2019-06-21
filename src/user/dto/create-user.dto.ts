import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    readonly ID: string
    @ApiModelProperty()
    readonly firstname: string
    @ApiModelProperty()
    readonly name: string
    @ApiModelProperty()
    readonly email: string
    @ApiModelProperty()
    readonly password: string;
}