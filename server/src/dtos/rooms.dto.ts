import { IsString, Length } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @Length(36, 36)
  public id: string;

  @IsString()
  @Length(3, 24)
  public name: string;

  @IsString()
  @Length(16, 16)
  public leader: string;
}

export class UpdateRoomDto {
  @IsString({ each: true })
  @Length(16, 16, { each: true })
  public peers: string[];
}
