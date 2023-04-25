import { Injectable } from '@nestjs/common';
import { JwtEncode } from '../utils/helpers';

@Injectable()
export class LoginService {
  getToken(username: string, password: string) {
    return JwtEncode({
      data: {
        username: username,
        password: password,
        iat: Math.floor(Date.now() / 1000) - 30,
      },
    });
  }
}
