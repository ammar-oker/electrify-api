import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Location } from './location.schema';
import CreateLocationDto from './dto/input/CreateLocationDto';
import { Charger } from '../chargers/charger.schema';
import UpdateLocationDto from './dto/input/UpdateLocationDto';
import QueryDto from './dto/input/QueryDto';
import ApiResponseDto from './dto/output/ApiResponseDto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectModel(Location.name) private locationModel: Model<Location>,
    @InjectModel(Charger.name) private chargerModel: Model<Charger>,
  ) {}

  async findAll({
    page,
    perPage,
    type,
    by,
  }: QueryDto): Promise<ApiResponseDto<Location>> {
    const sort = { [by || 'lastUpdated']: type || 'desc' };
    const pagination =
      !!page && !!perPage ? { skip: perPage * (page - 1), limit: perPage } : {};
    const data = await this.locationModel
      .find(undefined, undefined, { sort, ...pagination })
      .exec();

    const total = await this.locationModel.count();

    return {
      data,
      pagination: { total, page, perPage },
      sort: { by, type },
    };
  }

  async create({
    chargers,
    ...location
  }: CreateLocationDto): Promise<Location> {
    const createdChargers = await this.chargerModel.insertMany(chargers);
    const chargersIds = createdChargers.map((ch) => ch.id);
    const createdCat = new this.locationModel({
      chargers: chargersIds,
      ...location,
    });
    return await createdCat.save();
  }

  async findById(id: string) {
    const location = await this.locationModel
      .findById(id)
      .populate('chargers')
      .exec();

    if (location) return location;

    throw new NotFoundException(`Cannot find a location with the ID ${id}`);
  }

  async update(id: string, locationDto: UpdateLocationDto) {
    return await this.locationModel
      .findByIdAndUpdate(id, locationDto, { new: true })
      .populate('chargers')
      .exec();
  }
}
