import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChargerDocument = Charger & Document;

@Schema({
  timestamps: { updatedAt: 'lastUpdated' },
  toJSON: { virtuals: true },
})
export class Charger {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  serialNumber: string;

  @Prop({ required: true })
  status: string;
}

export const ChargerSchema = SchemaFactory.createForClass(Charger);
