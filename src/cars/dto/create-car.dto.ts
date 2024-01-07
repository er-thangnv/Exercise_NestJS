import { IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
    @IsString()
    id: string;

    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsNumber()
    capacity: number;

    @IsString()
    company: string;
}
