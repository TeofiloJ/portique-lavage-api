import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTarifDto {
    @ApiModelProperty()
    readonly TarifID: number
    @ApiModelProperty()
    readonly price: string
}