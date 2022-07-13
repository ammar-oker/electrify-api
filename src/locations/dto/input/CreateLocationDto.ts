import { ApiProperty } from '@nestjs/swagger';
import CreateChargerDto from '../../../chargers/dto/CreateChargerDto';
import {
  IsArray,
  IsISO31661Alpha3,
  IsPostalCode,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export default class CreateLocationDto {
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

  @ApiProperty({ type: [CreateChargerDto] })
  @IsArray()
  @ValidateNested()
  @Type(() => CreateChargerDto)
  chargers: CreateChargerDto[];
}
