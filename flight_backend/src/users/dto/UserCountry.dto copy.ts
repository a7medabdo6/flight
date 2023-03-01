import { Expose, Transform } from 'class-transformer';
import { Docs } from 'src/Docs/entities/Docs.entity';
import { Flight } from 'src/flight/entities/flight.entity';

export class UserCountryDto {
  @Transform(({ obj }) => obj.flight)
  @Expose()
  flight: Flight[];
}
