import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MessagesModule } from './messages/messages.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/graphql/*.graphql'],
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    MessagesModule,
    PrismaModule,
    UserModule
  ],
})
export class AppModule {}
