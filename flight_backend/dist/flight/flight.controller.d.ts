import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
export declare class FlightController {
    private readonly flightService;
    constructor(flightService: FlightService);
    create(createFlightDto: CreateFlightDto): Promise<import("./entities/flight.entity").Flight>;
    findAll(): Promise<import("./entities/flight.entity").Flight[]>;
    findOne(id: string): Promise<import("./entities/flight.entity").Flight>;
    update(id: string, updateFlightDto: UpdateFlightDto): Promise<import("./entities/flight.entity").Flight>;
    remove(id: string): Promise<import("./entities/flight.entity").Flight>;
}
