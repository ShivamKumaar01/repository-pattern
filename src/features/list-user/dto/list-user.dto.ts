
import { IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class ListUserDto {
  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  limit: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  page: number;
}

