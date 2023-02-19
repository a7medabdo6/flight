import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from 'src/flight/entities/flight.entity';
import { In, Repository } from 'typeorm';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';

@Injectable()
export class SeatService {
  constructor(@InjectRepository(Seat) private repo: Repository<Seat>) {}

  async create(createSeatDto: CreateSeatDto, flight: Flight) {
    const seat = await this.repo.create(createSeatDto);
    seat.flight = flight;

    return this.repo.save(seat);
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
    const seat = await this.repo.find({});
    return seat;
  }

  async findOne(id: number) {
    console.log(id, 'id');
    if (!id) {
      throw new UnauthorizedException('unAuthorized');
    }
    const seat = await this.repo.findOne({ where: { id } });
    if (!seat) {
      throw new NotFoundException('seat not found');
    }
    return seat;
  }
  async update(id: number, updateSeatDto: UpdateSeatDto) {
    const seat = await this.findOne(id);
    if (!seat) {
      throw new NotFoundException('seat not found');
    }
    Object.assign(seat, updateSeatDto);
    return this.repo.save(seat);
  }

  async remove(id: number) {
    const seat = await this.findOne(id);
    if (!seat) {
      throw new NotFoundException('seat not found');
    }
    return this.repo.remove(seat);
  }
}
