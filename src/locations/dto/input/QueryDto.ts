import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumberString, IsOptional, Max, Min } from 'class-validator';

export default class {
  @ApiProperty({ required: false })
  by?: string;

  @ApiProperty({ required: false, enum: ['asc', 'desc'] })
  type?: 'asc' | 'desc';

  @ApiProperty({ required: false })
  @IsOptional()
  @Min(1)
  @Type(() => Number)
  page?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @Min(1)
  @Max(50)
  @Type(() => Number)
  perPage?: number;
}
