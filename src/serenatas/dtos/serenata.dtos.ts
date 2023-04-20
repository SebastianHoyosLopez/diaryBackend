import { IsString } from "class-validator";

export class CreateSerenataDto {
    @IsString()
    readonly date: string
    @IsString()
    readonly hour: string
    @IsString()
    readonly municipality: string
    @IsString()
    readonly name: string
    @IsString()
    readonly place: string
}