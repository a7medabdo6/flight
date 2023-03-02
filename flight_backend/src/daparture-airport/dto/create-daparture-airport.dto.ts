import { IsNumber, IsString } from "class-validator";

export class CreateDapartureAirportDto {
    @IsString()
    name:string
    @IsNumber()
    city_id:number
}
