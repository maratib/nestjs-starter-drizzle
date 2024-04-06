import { IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Email is not valid' })
  // @IsNotEmpty({ message: 'Email cannot be empty' })
  email: string;
}
