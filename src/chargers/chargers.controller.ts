import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChargersService } from './chargers.service';
import CreateChargerDto from './dto/CreateChargerDto';

@ApiTags('Chargers')
@Controller('chargers')
export class ChargersController {
  constructor(private chargerService: ChargersService) {}

  @Post(':locationId')
  async create(
    @Param('locationId') locationId: string,
    @Body() body: CreateChargerDto,
  ) {
    return await this.chargerService.create(locationId, body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: CreateChargerDto) {
    return await this.chargerService.update(id, body);
  }

  @Delete(':locationId/:chargerId')
  async delete(
    @Param('locationId') locationId: string,
    @Param('chargerId') chargerId: string,
  ) {
    await this.chargerService.delete(locationId, chargerId);
  }
}
