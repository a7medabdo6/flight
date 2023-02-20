import { Seat } from 'src/seat/entities/seat.entity';
export declare class Flight {
    id: number;
    country: string;
    city: string;
    airlines: string;
    flight_number: string;
    departure_airport: string;
    arrival_airport: string;
    departure_time: string;
    arrival_time: string;
    duration: string;
    weight: string;
    seats: Seat;
    created_at: Date;
    updated_at: Date;
}