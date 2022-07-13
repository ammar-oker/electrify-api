import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Charger } from '../chargers/charger.schema';

export type LocationDocument = Location & Document;

@Schema({
  timestamps: { updatedAt: 'lastUpdated' },
  toJSON: { virtuals: true },
})
export class Location {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  location: number;

  @Prop({ required: true })
  postalCode: string;

  @Prop({ required: true })
  country: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Charger' }] })
  chargers: Charger[];
}

export const LocationSchema = SchemaFactory.createForClass(Location);
