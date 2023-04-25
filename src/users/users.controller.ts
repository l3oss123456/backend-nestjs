import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserDTO, UserQueryDTO } from 'src/utils/dto/user.dto';

@ApiTags(`user`)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getProductAll(@Query() UserQuery: UserQueryDTO): UserDTO[] {
    // if (firstName) {
    //   return this.usersService.findByCondition((product) => {
    //     return product.firstName.includes(firstName);
    //   });
    // }
    return this.usersService.findAll();
  }
}
