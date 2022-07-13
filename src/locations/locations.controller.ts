import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import CreateLocationDto from './dto/input/CreateLocationDto';
import { LocationsService } from './locations.service';
import UpdateLocationDto from './dto/input/UpdateLocationDto';
import QueryDto from './dto/input/QueryDto';

@ApiTags('Charging Locations')
@Controller('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) {}

  @Get()
  async findAll(@Query() query: QueryDto) {
    return this.locationsService.findAll(query);
  }

  @Post()
  async create(@Body() body: CreateLocationDto) {
    return await this.locationsService.create(body);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.locationsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateLocationDto) {
    return await this.locationsService.update(id, body);
  }
}
