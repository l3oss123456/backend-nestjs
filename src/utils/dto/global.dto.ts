import { ApiProperty } from '@nestjs/swagger';

export class SortDTO {
  @ApiProperty({
    name: 'sort_field',
    required: false,
  })
  sort_field: string[];

  @ApiProperty({
    name: 'sort_order',
    required: false,
    type: [Number],
    description: `-1=DESC, 1=ASC`,
  })
  sort_order: number[];
}

export class PaginationDTO {
  @ApiProperty({
    // name: 'page',
    required: false,
    default: 1,
  })
  page: number;

  @ApiProperty({
    // name: 'per_page',
    required: false,
    default: 10,
  })
  per_page: number;
  //   required: false;
}
