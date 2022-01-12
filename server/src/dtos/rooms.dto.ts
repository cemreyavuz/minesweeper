import { IsString, Length } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @Length(3, 24)
  public name: string;

  @IsString({ each: true })
  @Length(16, 16, { each: true })
  public peers: string[];
}

export class UpdateRoomDto {
  @IsString({ each: true })
  @Length(16, 16, { each: true })
  public peers: string[];
}
