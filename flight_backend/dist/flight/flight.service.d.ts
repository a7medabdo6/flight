import { FlightCompany } from 'src/flight-company/entities/flight-company.entity';
import { Repository } from 'typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';
export declare class FlightService {
    private repo;
    constructor(repo: Repository<Flight>);
    create(createFlightDto: CreateFlightDto, flightCompany: FlightCompany): Promise<Flight>;
    findAllByIds(ids: []): Promise<Flight[]>;
    findAll(): Promise<Flight[]>;
    findOne(id: number): Promise<Flight>;
    update(id: number, updateFlightDto: UpdateFlightDto): Promise<Flight>;
    remove(id: number): Promise<Flight>;
}
