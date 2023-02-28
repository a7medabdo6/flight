import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { FlightCompanyService } from 'src/flight-company/flight-company.service';
export declare class FlightController {
    private readonly flightService;
    private readonly flightCompanyService;
    constructor(flightService: FlightService, flightCompanyService: FlightCompanyService);
    create(createFlightDto: CreateFlightDto): Promise<import("./entities/flight.entity").Flight>;
    findAll(): Promise<import("./entities/flight.entity").Flight[]>;
    findOne(id: string): Promise<import("./entities/flight.entity").Flight>;
    update(id: string, updateFlightDto: UpdateFlightDto): Promise<import("./entities/flight.entity").Flight>;
    remove(id: string): Promise<import("./entities/flight.entity").Flight>;
}
