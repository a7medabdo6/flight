import { Injectable } from '@nestjs/common';
import {
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { FlightCompany } from 'src/flight-company/entities/flight-company.entity';
import { In, Repository } from 'typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';

@Injectable()
export class FlightService {
  constructor(@InjectRepository(Flight) private repo: Repository<Flight>) {}

  async create(createFlightDto: CreateFlightDto, flightCompany: FlightCompany) {
    const flight = await this.repo.create(createFlightDto);
    flight.company = flightCompany;

    return this.repo.save(flight);
  }
  async findAllByIds(ids: []) {
    console.log(ids, 'id');
    if (!ids) {
      throw new UnauthorizedException('unAuthorized');
    }
    const plan = await this.repo.find({
      where: { id: In(ids) },
    });
    if (!plan) {
      throw new NotFoundException('plan not found');
    }
    return plan;
  }
  async findAll() {
    const flight = await this.repo.find({});
    return flight;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const flight = await this.repo.findOne({ where: { id } });
    if (!flight) {
      throw new NotFoundException('flight not found');
    }
    return flight;
  }
  async update(id: number, updateFlightDto: UpdateFlightDto) {
    const flight = await this.findOne(id);
    if (!flight) {
      throw new NotFoundException('flight not found');
    }
    Object.assign(flight, updateFlightDto);
    return this.repo.save(flight);
  }

  async remove(id: number) {
    const flight = await this.findOne(id);
    if (!flight) {
      throw new NotFoundException('flight not found');
    }
    return this.repo.remove(flight);
  }
}
