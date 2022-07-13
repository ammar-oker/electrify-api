import { Injectable } from '@nestjs/common';
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
    page = 1,
    perPage = 10,
    type = 'asc',
    by = 'name',
  }: QueryDto): Promise<ApiResponseDto<Location>> {
    const data = await this.locationModel
      .find()
      .sort({ [by]: type })
      .limit(perPage)
      .skip(perPage * (page - 1))
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
    return await this.locationModel.findById(id).populate('chargers').exec();
  }

  async update(id: string, locationDto: UpdateLocationDto) {
    return await this.locationModel
      .findByIdAndUpdate(id, locationDto, { new: true })
      .exec();
  }
}
