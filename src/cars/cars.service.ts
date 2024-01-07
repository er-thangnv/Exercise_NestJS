import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    return await this.carsRepository.save(createCarDto);
  }

  async findAll() {
    return await this.carsRepository.find();
  }

  async findOne(id: string) {
    return await this.carsRepository.findOne({ where: {id} });
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    return await this.carsRepository.update(id, updateCarDto);
  }

  async remove(id: string) {
    return await this.carsRepository.delete(id);
  }
}
