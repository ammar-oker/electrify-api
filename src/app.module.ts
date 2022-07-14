import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsModule } from './locations/locations.module';
import { ChargersModule } from './chargers/chargers.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env['MONGO_URL'], {
      sslValidate: false,
      dbName: process.env.DB_NAME,
    }),
    LocationsModule,
    ChargersModule,
  ],
})
export class AppModule {}
