import { IsString } from 'class-validator';

export class CreateSupplierDto {
  @IsString()
  name: string;
  
  @IsString()
  country: string;
  @IsString()
  city: string;
}
