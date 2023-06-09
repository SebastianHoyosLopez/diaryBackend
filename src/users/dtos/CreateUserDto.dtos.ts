import { IsString, IsNotEmpty, IsEmail, Length, IsPositive, IsOptional } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'the email of user' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly userName: string

  @IsNotEmpty()
  readonly role: string;

  @IsOptional()
  @IsPositive()
  @IsNotEmpty()
  readonly customerId: number;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
