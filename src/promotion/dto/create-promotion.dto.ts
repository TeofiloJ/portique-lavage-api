import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePromotionDto {
    @ApiModelProperty()
    readonly PromotionID: number
    @ApiModelProperty()
    readonly name: string
	@ApiModelProperty()
    readonly fk_id_program: number
	@ApiModelProperty()
    readonly pourcentage: number
}