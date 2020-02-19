import { Field, InputType } from 'type-graphql';
import { User } from '../prisma/prisma.binding';
import { IsEmail, MinLength } from 'class-validator';

@InputType({ description: 'Signup Input' })
export class SignupInput implements Partial<User>{
  @IsEmail()
  @Field() email: string;

  @MinLength(6)
  @Field() password: string;
}