import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { FlightService } from 'src/flight/flight.service';

@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService,private readonly flightService: FlightService) {}

  @Post()
  async create(@Body() createSeatDto: CreateSeatDto) {
    const flight =await this.flightService.findOne(createSeatDto.flightId)
    return this.seatService.create(createSeatDto,flight);
  }

  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatService.remove(+id);
  }
}
