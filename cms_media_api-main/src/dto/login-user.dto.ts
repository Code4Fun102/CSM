import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsString()
  @ApiProperty({ example: 'hanhpro' })
  username: string;

  @IsString()
  @ApiProperty({ example: 'password' })
  password: string;
}
