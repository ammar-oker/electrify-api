import { Module } from '@nestjs/common';
import { ChargersController } from './chargers.controller';
import { ChargersService } from './chargers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Location, LocationSchema } from '../locations/location.schema';
import { Charger, ChargerSchema } from './charger.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Location.name, schema: LocationSchema },
      { name: Charger.name, schema: ChargerSchema },
    ]),
  ],
  controllers: [ChargersController],
  providers: [ChargersService],
})
export class ChargersModule {}
