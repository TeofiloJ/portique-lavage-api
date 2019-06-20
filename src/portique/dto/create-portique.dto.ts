import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePortiqueDto {
    @ApiModelProperty()
    readonly PortiqueID: number
    @ApiModelProperty()
    readonly name: String
    @ApiModelProperty()
    readonly type: String
    @ApiModelProperty()
    readonly location: String
    @ApiModelProperty()
    readonly status:boolean 
}