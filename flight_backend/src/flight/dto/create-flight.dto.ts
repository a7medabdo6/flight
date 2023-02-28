import { IsNumber, IsString } from 'class-validator';

export class CreateFlightDto {
  

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
  @IsNumber()
  country_id: number;
  @IsNumber()
  city_id: number;
}
