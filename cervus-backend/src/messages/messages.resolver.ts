import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class MessagesResolver {

    constructor(private readonly prisma: PrismaService){}

    @Query()
    messages(@Args() args){
        return this.prisma.query.messages(args);
    }

    @Mutation()
    createMessage(@Args() args){
        return this.prisma.mutation.createMessage(args);
    }
}