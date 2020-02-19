import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class UserResolver {

    constructor(private readonly prisma: PrismaService){}

    @Query()
    users(@Args() args){
        return this.prisma.query.users(args);
    }

    @Mutation()
    createUser(@Args() args){
        return this.prisma.mutation.createUser(args);
    }
}