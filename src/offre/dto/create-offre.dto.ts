import { ApiModelProperty } from '@nestjs/swagger';

export class CreateOffreDto {
    @ApiModelProperty()
    readonly ID: number
    @ApiModelProperty()
    readonly name: String
    @ApiModelProperty()
    readonly promotion: String
  
}