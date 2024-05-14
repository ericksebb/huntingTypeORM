import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateCreatureDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastSee: string = new Date().toISOString();

    @ApiProperty()
    @IsNotEmpty()
    countLastSee: number;

    @ApiProperty({ required: false, default: false })
    @IsBoolean()
    extinct?: boolean = false;
}