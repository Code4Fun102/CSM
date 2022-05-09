import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @ApiProperty({ example: 'Trending' })
  name: string;

  @IsString()
  @ApiProperty({
    example: [
      'https://cdn.roku-universal-remote-tv.com/icon/animation_trending.png',
      'https://cdn.roku-universal-remote-tv.com/icon/animation_trending.png',
    ],
  })
  icon: string[];

  @IsString()
  @ApiProperty({
    example: [
      'https://charinganimationdata-1a212.kxcdn.com/charinganimationdata/api/v3.1/Trending.json',
      'https://fitnesstrainingglobal.com/charinganimationdata/api/v3.1/Trending.json',
    ],
  })
  links: string[];

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: [
      'https://cdn.roku-universal-remote-tv.com/background/Trending.png',
    ],
  })
  background?: string[];
}
