import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    readonly UserID: String
    @ApiModelProperty()
    readonly firstname: String
    @ApiModelProperty()
    readonly name: String
    @ApiModelProperty()
    readonly phone: String
}