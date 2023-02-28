import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { AdminGuard } from 'src/guards/admin.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { FlightCompanyService } from 'src/flight-company/flight-company.service';

//@UseGuards(AuthGuard)
@Controller('flight')
export class FlightController {
  constructor(
    private readonly flightService: FlightService,
    private readonly flightCompanyService: FlightCompanyService,
  ) {}

  //  @UseGuards(AdminGuard)
  @Post()
  async create(@Body() createFlightDto: CreateFlightDto) {
    const flightCompanyService = await this.flightCompanyService.findOne(
      createFlightDto.company_id,
    );
    return this.flightService.create(createFlightDto, flightCompanyService);
  }

  @Get()
  findAll() {
    return this.flightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlightDto: UpdateFlightDto) {
    return this.flightService.update(+id, updateFlightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flightService.remove(+id);
  }
}
