import { Flight } from 'src/flight/entities/flight.entity';
import { Repository } from 'typeorm';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';
export declare class SeatService {
    private repo;
    constructor(repo: Repository<Seat>);
    create(createSeatDto: CreateSeatDto[], flight: Flight): Promise<import("typeorm").InsertResult>;
    findAllByIds(ids: []): Promise<Seat[]>;
    findAll(): Promise<Seat[]>;
    findOne(id: number): Promise<Seat>;
    update(id: number, updateSeatDto: UpdateSeatDto): Promise<Seat>;
    remove(id: number): Promise<Seat>;
}
