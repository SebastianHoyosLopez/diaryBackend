import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

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
}

export class UpdateSerenataDto extends PartialType(CreateSerenataDto) {}