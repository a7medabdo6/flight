import { Country } from 'src/country/entities/country.entity';
import { Flight } from 'src/flight/entities/flight.entity';
export declare class City {
    id: number;
    name: string;
    flight: Flight;
    country: Country;
    created_at: Date;
    updated_at: Date;
}
