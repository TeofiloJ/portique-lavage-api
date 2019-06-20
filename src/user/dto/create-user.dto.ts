import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    readonly ID: String
    @ApiModelProperty()
    readonly firstname: String
    @ApiModelProperty()
    readonly name: String
    @ApiModelProperty()
    readonly phone: String
}