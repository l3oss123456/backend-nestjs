import { ApiProperty } from '@nestjs/swagger';

export interface ProductDTO {
  name: string;
  id: number;
  price: number;
}

export class ProductQueryDTO {
  @ApiProperty({
    required: false,
  })
  name: string;
  id: number;
  price: number;
}
