import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { FlightService } from 'src/flight/flight.service';
export declare class SeatController {
    private readonly seatService;
    private readonly flightService;
    constructor(seatService: SeatService, flightService: FlightService);
    create(createSeatDto: CreateSeatDto): Promise<import("./entities/seat.entity").Seat>;
    findAll(): Promise<import("./entities/seat.entity").Seat[]>;
    findOne(id: string): Promise<import("./entities/seat.entity").Seat>;
    update(id: string, updateSeatDto: UpdateSeatDto): Promise<import("./entities/seat.entity").Seat>;
    remove(id: string): Promise<import("./entities/seat.entity").Seat>;
}
