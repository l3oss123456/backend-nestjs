import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginService } from './login.service';

@ApiTags(`login`)
@Controller('login')
export class LoginController {
  constructor(private LoginService: LoginService) {}

  @Get()
  login(
    @Query(`username`) username: string,
    @Query(`password`) password: string,
  ) {
    return this.LoginService.getToken(username, password);
  }
}
