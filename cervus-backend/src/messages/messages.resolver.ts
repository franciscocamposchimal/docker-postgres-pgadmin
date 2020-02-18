import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {
    messagesList = [
        { id: 0, description: "Message hardcode" },
    ]

    @Query('messages')
    getMessages(){
        return this.messagesList;
    }

    @Mutation()
    createMessage(@Args('description') description: string){
        let id = this.messagesList.length;
        let newMessage = { id, description };
        this.messagesList.push(newMessage);
        return newMessage;
    }
}