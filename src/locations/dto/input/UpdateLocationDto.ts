import { ApiProperty } from '@nestjs/swagger';
import {
  IsISO31661Alpha3,
  IsPostalCode,
  MaxLength,
  MinLength,
} from 'class-validator';

export default class UpdateLocationDto {
  @ApiProperty()
  @MinLength(3)
  @MaxLength(45)
  name: string;

  @ApiProperty()
  location: number;

  @ApiProperty()
  @IsPostalCode('any')
  postalCode: string;

  @ApiProperty()
  @IsISO31661Alpha3()
  country: string;
}
