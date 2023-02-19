import { Flight } from 'src/flight/entities/flight.entity';
export declare class Seat {
    id: number;
    airlines: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: string;
    duration: string;
    weight: string;
    total_seat_number: string;
    available_seats: string;
    suppliers: string;
    seat_price: string;
    flight: Flight;
    created_at: Date;
    updated_at: Date;
}
