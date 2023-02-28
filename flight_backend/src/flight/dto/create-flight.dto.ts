import { IsNumber, IsString } from 'class-validator';

export class CreateFlightDto {
  @IsString()
  country: string;
  @IsString()
  city: string;

  @IsString()
  flight_number: string;
  @IsString()
  departure_airport: string;
  @IsString()
  arrival_airport: string;
  @IsString()
  departure_time: string;
  @IsString()
  arrival_time: string;
  @IsString()
  duration: string;
  @IsString()
  weight: string;
  @IsNumber()
  company_id: number;
}
