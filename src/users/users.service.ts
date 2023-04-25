import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/utils/dto/user.dto';

@Injectable()
export class UsersService {
  private user: UserDTO[] = [
    {
      id: 1,
      firstName: `eiei`,
      lastName: `jubjub`,
    },
    {
      id: 2,
      firstName: `test`,
      lastName: `na`,
    },
  ];

  findAll(): UserDTO[] {
    return this.user;
  }

  findByCondition(predicate: (product: UserDTO) => boolean) {
    return this.user.filter((item) => predicate(item));
  }
}
