import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  private readonly cars = [];

  async create(createCarDto: CreateCarDto) {
    return await this.cars.push(createCarDto);
  }

  async findAll() {
    return await this.cars;
  }

  findOne(id: string) {
    const car = this.cars.find(car => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    const index = await this.cars.findIndex(car => car.id === id);
    if (index !== -1) {
      this.cars[index] = { ...updateCarDto, id };
    }
  }

  remove(id: string) {
    const index = this.cars.findIndex(car => car.id === id);
    if (index !== -1) {
      this.cars.splice(index, 1);
    }
  }
}
