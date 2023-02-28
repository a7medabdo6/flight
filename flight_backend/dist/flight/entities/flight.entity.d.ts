import { City } from 'src/city/entities/city.entity';
import { Country } from 'src/country/entities/country.entity';
import { FlightCompany } from 'src/flight-company/entities/flight-company.entity';
import { Seat } from 'src/seat/entities/seat.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Flight {
    id: number;
    airlines: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: string;
    duration: string;
    weight: string;
    company: FlightCompany;
    country: Country;
    city: City;
    seats: Seat;
    user?: User[];
    created_at: Date;
    updated_at: Date;
}
