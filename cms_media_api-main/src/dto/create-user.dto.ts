import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ example: 'hanhpro' })
  username: string;

  @IsEmail()
  @ApiProperty({ example: 'hanh@gmail.com' })
  email: string;

  @IsString()
  @ApiProperty({ example: 'password' })
  password: string;

  @IsString()
  @ApiProperty({ example: '0123456789' })
  phoneNumber: string;
}
