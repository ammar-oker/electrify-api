import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Location } from '../locations/location.schema';
import { Charger } from './charger.schema';
import CreateChargerDto from './dto/CreateChargerDto';

@Injectable()
export class ChargersService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>,
    @InjectModel(Charger.name) private chargerModel: Model<Charger>,
  ) {}

  async create(
    locationId: string,
    createCharger: CreateChargerDto,
  ): Promise<Charger> {
    const foundLocation =
      Types.ObjectId.isValid(locationId) &&
      (await this.locationModel.exists({ _id: locationId }));

    if (!foundLocation) {
      throw new NotFoundException(
        `Cannot find the location with the ID ${locationId}`,
      );
    }

    const charger = await this.chargerModel.create(createCharger);
    await this.locationModel.findByIdAndUpdate(locationId, {
      $push: { chargers: charger.id },
    });

    return charger;
  }

  async update(id: string, chargerDto: CreateChargerDto): Promise<Charger> {
    return await this.chargerModel
      .findByIdAndUpdate(id, chargerDto, { new: true })
      .exec();
  }

  async delete(id: string) {
    await this.chargerModel.findByIdAndDelete(id);
  }
}
