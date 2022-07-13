import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsModule } from './locations/locations.module';
import { ChargersModule } from './chargers/chargers.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env['MONGO_URL'], {
      sslValidate: false,
      dbName: 'electrify',
    }),
    LocationsModule,
    ChargersModule,
  ],
})
export class AppModule {}
