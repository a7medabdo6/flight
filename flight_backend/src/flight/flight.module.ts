import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from './entities/flight.entity';
import { FlightCompanyModule } from 'src/flight-company/flight-company.module';

@Module({
  imports: [TypeOrmModule.forFeature([Flight]),FlightCompanyModule],

  controllers: [FlightController],
  providers: [FlightService],
  exports: [FlightService],
})
export class FlightModule {}
