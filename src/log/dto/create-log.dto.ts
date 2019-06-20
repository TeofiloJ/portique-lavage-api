import { ApiModelProperty } from '@nestjs/swagger';

export class CreateLogDto {
    @ApiModelProperty()
    readonly ID: number
}