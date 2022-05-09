import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @IsString()
  @ApiProperty({ example: 'Trending' })
  name: string;

  @IsBoolean()
  @ApiProperty({ example: true })
  isPremium: boolean;

  @IsString()
  @ApiProperty({
    example: {
      gravity: 'BOTTOM',
      icons: ['ic_flash_24'],
    },
  })
  charing: string[];

  @IsString()
  @ApiProperty({
    example: [
      'https://cdn.roku-universal-remote-tv.com/image/Unique/CHR_Unique_7.jpg',
    ],
  })
  thumbs: string[];

  @IsString()
  @ApiProperty({
    example: [
      'https://i.imgur.com/ruerObf.gif',
      'https://fitnesstrainingglobal.com/charinganimationdata/data/datafilter/Battery/charge_battery_pnc01/charge_battery_pnc01.gif',
    ],
  })
  thumbvideos: string[];

  @IsString()
  @ApiProperty({
    example: [
      'https://cdn.roku-universal-remote-tv.com/video/Unique/CHR_Unique_7.mp4',
    ],
  })
  videos: string[];

  @IsNumber()
  @ApiProperty({ example: 'Trending' })
  priority: number;

  @IsString()
  @ApiProperty({ example: ['https://linksound'] })
  sounds: string[];
}
