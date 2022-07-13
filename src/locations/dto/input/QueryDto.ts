import { ApiProperty } from '@nestjs/swagger';

export default class {
  @ApiProperty({ required: false })
  by?: string;

  @ApiProperty({ required: false, enum: ['asc', 'desc'] })
  type?: 'asc' | 'desc';

  @ApiProperty({ required: false })
  page?: number;

  @ApiProperty({ required: false })
  perPage?: number;
}
