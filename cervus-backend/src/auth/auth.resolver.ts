import * as bcryptjs from 'bcryptjs';
import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { ResGql, GqlUser } from '../shared/decorators/decorators';
import { SignupInput } from './signupInput.dto';
import { GqlAuthGuard } from './graphql-auth.guard';
//import { User } from '../prisma/prisma.binding';

@Resolver('Auth')
export class AuthResolver {
    constructor(
      private readonly jwt: JwtService,
      private readonly prisma: PrismaService,
    ) {}

    @Query()
    @UseGuards(GqlAuthGuard)
    async users(@GqlUser() user: any) {
        console.log("USER: ", user);
        return await this.prisma.query.users(null);
    }
  
    @Mutation()
    async login(
      @Args('data') { email, password },
      @ResGql() res,
    ) {
      const user = await this.prisma.query.user({ where: { email } });
      if (!user) {
        throw Error('Email or password incorrect');
      }
  
      const valid = await bcryptjs.compare(password, user.password);
      if (!valid) {
        throw Error('Email or password incorrect');
      }
  
      const jwt = this.jwt.sign({ id: user.id });
      res.cookie('token', jwt, { httpOnly: true });
      return user;
    }
  
    @Mutation()
    async signup(
        @ResGql() res,
        @Args('data') signupInput: SignupInput,
    ) {
      const emailExists = await this.prisma.exists.User({
        email: signupInput.email,
      });
      if (emailExists) {
        throw Error('Email is already in use');
      }
      const password = await bcryptjs.hash(signupInput.password, 10);
  
      const user = await this.prisma.mutation.createUser({
          data: {
              email: signupInput.email,
              password: password
          }
      });
  
      const jwt = this.jwt.sign({ id: user.id });
      res.cookie('token', jwt, { httpOnly: true });
      //console.log(res.cookie);
      return user;
    }
  }
