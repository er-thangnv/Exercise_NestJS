import { Test, TestingModule } from '@nestjs/testing';
import { CarsService } from './cars.service';
import { NotFoundException } from '@nestjs/common';

describe('CarService', () => {
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsService]
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createCar', () => {
    it('should add a car to the cars array', () => {
      const car = { id: '7a70ec5c-3b43-46d4-936d-0c859a570879', name: 'Audi', description: 'Audi description', capacity: 4, company: 'Audi company' };
      service.create(car);
      expect(service['cars']).toContain(car);
    });
  });

  describe('findCar', () => {
    it('should return a car by id', () => {
        const car = { id: '7a70ec5c-3b43-46d4-936d-0c859a570879', name: 'Audi', description: 'Audi description', capacity: 4, company: 'Audi company' };
        service.create(car);
        expect(service.findOne(car.id)).toEqual(car);
    });

    it('should throw NotFoundException if car is not found', () => {
      expect(() => service.findOne('7a70ec5c-3b43-46d4-936d-0c859a570873')).toThrowError(NotFoundException);
    });
  });

  describe('updateCar', () => {
    it('should update a car by id', async () => {
      const car = { id: '7a70ec5c-3b43-46d4-936d-0c859a570879', name: 'Audi', description: 'Audi description', capacity: 4, company: 'Audi company' };
      await service.create(car);
      await service.update(car.id, { name: 'Honda' });
      const updatedCar = await service.findOne(car.id);
      expect(updatedCar.name).toEqual('Honda');
    });
  });

  describe('deleteCar', () => {
    it('should delete a car by id', () => {
      const car = { id: '7a70ec5c-3b43-46d4-936d-0c859a570879', name: 'Audi', description: 'Audi description', capacity: 4, company: 'Audi company' };
      service.create(car);
      service.remove(car.id);
      expect(service['cars']).not.toContain(car);
    });
  });
});
