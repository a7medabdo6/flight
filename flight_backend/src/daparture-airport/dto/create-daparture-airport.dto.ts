import { IsNumber, IsString } from "class-validator";

export class CreateDapartureAirportDto {
    @IsString()
    name:string
    
    @IsString()
    country:string
    @IsString()
    city:string
    @IsNumber()
    city_id:number
}
