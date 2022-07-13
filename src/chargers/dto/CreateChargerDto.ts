import { ApiProperty } from '@nestjs/swagger';
import { IsIn } from 'class-validator';
import { CHARGER_TYPES, STATUSES } from '../../constants';

export default class CreateChargerDto {
  @ApiProperty()
  @IsIn(CHARGER_TYPES)
  type: string;

  @ApiProperty()
  @IsIn(STATUSES)
  status: string;

  @ApiProperty()
  serialNumber: string;
}
