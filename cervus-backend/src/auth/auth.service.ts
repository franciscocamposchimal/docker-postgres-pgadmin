import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validate({ id }) {
    console.log('AuthService: ',id);
    const user = await this.prisma.query.user({ where: { id } });
    if (!user) {
      throw Error('Authenticate validation error');
    }
    return user;
  }
}
