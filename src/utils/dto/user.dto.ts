import { ApiProperty } from '@nestjs/swagger';

export interface UserDTO {
  id: number;
  firstName: string;
  lastName: string;
}

export enum LettersEnum {
  A = 'A',
  B = 'B',
  C = 'C',
}

export class UserQueryDTO {
  @ApiProperty({
    required: false,
  })
  firstName: string;

  @ApiProperty({
    enum: LettersEnum,
    enumName: 'LettersEnum',
  })
  enum: LettersEnum;

  @ApiProperty({
    name: 'sortBy',
    required: false,
  })
  sortBy: string[];

  @ApiProperty()
  limit: number;
  required: false;
}
