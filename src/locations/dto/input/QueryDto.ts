import { ApiProperty } from '@nestjs/swagger';

export default class {
  @ApiProperty()
  by?: string;

  @ApiProperty()
  type?: 'asc' | 'desc';

  @ApiProperty()
  page?: number;

  @ApiProperty()
  perPage?: number;
}
