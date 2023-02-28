import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './entities/flight.entity';
import { FlightCompanyModule } from 'src/flight-company/flight-company.module';
import { CountryModule } from 'src/country/country.module';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Flight]),
    FlightCompanyModule,
    CountryModule,
    CityModule
  ],

  controllers: [FlightController],
  providers: [FlightService],
  exports: [FlightService],
})
export class FlightModule {}
