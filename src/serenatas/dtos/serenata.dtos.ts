import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsPositive, IsString } from "class-validator";
import { CustomerEntity } from "src/users/entities/customer.entity";
import { DeepPartial } from "typeorm";

export class CreateSerenataDto {
    @IsString()
    @IsNotEmpty()
    readonly date: string
    @IsString()
    @IsNotEmpty()
    readonly hour: string
    @IsString()
    @IsNotEmpty()
    readonly municipality: string
    @IsString()
    @IsNotEmpty()
    readonly name: string
    @IsString()
    @IsNotEmpty()
    readonly place: string

    @IsOptional()
    @IsPositive()
    @IsNotEmpty()
    readonly customerId: number;
}

export class UpdateSerenataDto extends PartialType(CreateSerenataDto) {}