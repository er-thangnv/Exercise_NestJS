import { IsNumber, IsString } from 'class-validator';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cars')
export class Car {
    @PrimaryGeneratedColumn('uuid')
    @IsString()
    id: string

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    description: string;

    @Column()
    @IsNumber()
    capacity: number;

    @Column()
    @IsString()
    company: string;
}
