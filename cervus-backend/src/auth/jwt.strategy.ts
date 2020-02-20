import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
//import { Request } from 'express';
import { AuthService } from './auth.service';

const cookieExtractor = (req): string | null => {
  let token = null;
  if (req && req.cookies) {
    //console.log(req.cookies.token);
    token = req.cookies.token;
  }
  return token;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: cookieExtractor,
      secretOrKey: 'hashmegasecretpass',
    });
  }

  validate(payload) {
    return this.authService.validate(payload);
  }
}